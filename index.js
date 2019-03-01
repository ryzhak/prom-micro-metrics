const { collectDefaultMetrics, register, Gauge } = require('prom-client');
const si = require('systeminformation');

// array of all registered gauges
let registeredGauges = [];

/**
 * Initializes default metrics
 * @param {Object} config Config object
 */
function init(config = {includeProcessMetrics: false}) {
	// enhance Gauge to have getValueFunc
	Gauge.prototype.getValueFunc = () => null;
	// enable default prometheus metrics
	collectDefaultMetrics();
	// register common default metrics
	registerNewGauge('sys_info_time_uptime', 'System uptime in seconds', async () => (await si.time()).uptime);
	registerNewGauge('sys_info_cpu_temperature_main', 'CPU main temperature (avg)', async () => (await si.cpuTemperature()).main);
	registerNewGauge('sys_info_cpu_temperature_max', 'CPU max temperature', async () => (await si.cpuTemperature()).max);
	registerNewGauge('sys_info_mem_total', 'Total RAM memory in bytes', async () => (await si.mem()).total);
	registerNewGauge('sys_info_mem_free', 'RAM memory not used in bytes', async () => (await si.mem()).free);
	registerNewGauge('sys_info_mem_used', 'RAM memory used (incl. buffers/cache)', async () => (await si.mem()).used);
	registerNewGauge('sys_info_mem_swaptotal', 'SWAP total in bytes', async () => (await si.mem()).swaptotal);
	registerNewGauge('sys_info_mem_swapused', 'SWAP used in bytes', async () => (await si.mem()).swapused);
	registerNewGauge('sys_info_mem_swapfree', 'SWAP free in bytes', async () => (await si.mem()).swapfree);
	registerNewGauge('sys_info_current_load_avgload', 'Average CPU load', async () => (await si.currentLoad()).avgload);
	registerNewGauge('sys_info_current_load_currentload', 'CPU load in %', async () => (await si.currentLoad()).currentload);
	registerNewGauge('sys_info_current_load_currentload_user', 'CPU load user in %', async () => (await si.currentLoad()).currentload_user);
	registerNewGauge('sys_info_current_load_currentload_system', 'CPU load system in %', async () => (await si.currentLoad()).currentload_system);
	registerNewGauge('sys_info_current_load_currentload_nice', 'CPU load nice in %', async () => (await si.currentLoad()).currentload_nice);
	registerNewGauge('sys_info_current_load_currentload_idle', 'CPU load idle in %', async () => (await si.currentLoad()).currentload_idle);
	registerNewGauge('sys_info_full_load', 'CPU full load since bootup in %', async () => (await si.fullLoad()));
	// put process metrics in separate block because requests are too long, ~2000ms
	if(config.includeProcessMetrics) {
		registerNewGauge('sys_info_processes_all', '# of all processes', async () => (await si.processes()).all);
		registerNewGauge('sys_info_processes_running', '# of all processes running', async () => (await si.processes()).running);
		registerNewGauge('sys_info_processes_blocked', '# of all processes blocked', async () => (await si.processes()).blocked);
		registerNewGauge('sys_info_processes_sleeping', '# of all processes sleeping', async () => (await si.processes()).sleeping);
	}
	registerNewGauge('sys_info_network_connections_all', '# of all network connections', async () => (await si.networkConnections()).length);
}

/**
 * Returns metrics in plain text for prometheus usage
 * @returns {string} Text with metrics
 */
async function getPlainText() {
	// update values in all gauges
	const nowTimestamp = Date.now();
	for(let i = 0; i < registeredGauges.length; i++) {
		registeredGauges[i].set(await registeredGauges[i].getValueFunc(), nowTimestamp);
	}
	return register.metrics();
}

/**
 * Registers a new gauge
 * @param {string} metricName Metric name 
 * @param {string} metricHelp Metric help text 
 * @param {function} getValueFunc Function to get value for gauge
 */
function registerNewGauge(metricName, metricHelp, getValueFunc) {
	let newGauge = new Gauge({ name: metricName, help: metricHelp });
	newGauge.getValueFunc = getValueFunc;
	registeredGauges.push(newGauge);
}

module.exports = {
	getPlainText: getPlainText,
	init: init,
	registerNewGauge: registerNewGauge
};