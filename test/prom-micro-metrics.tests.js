const assert = require('chai').assert;

const promMicroMetrics = require('../index.js');

const METRIC_PROCESS_CPU_USER_SECONDS_TOTAL = 'process_cpu_user_seconds_total';
const METRIC_SYS_INFO_PROCESSES_ALL = 'sys_info_processes_all';

promMicroMetrics.init({includeProcessMetrics: true});

describe('init()', () => {
	it('should return metrics with processes', async () => {
		const metricsText = await promMicroMetrics.getPlainText();
		assert.notEqual(metricsText.indexOf(METRIC_SYS_INFO_PROCESSES_ALL), -1);
	});
});

describe('getPlainText()', () => {
	it('should return metrics in plain text', async () => {
		const metricsText = await promMicroMetrics.getPlainText();
		assert.notEqual(metricsText.indexOf(METRIC_PROCESS_CPU_USER_SECONDS_TOTAL), -1);
	});
});

describe('registerNewGauge()', () => {
	it('should create a new metric and return it in metrics', async () => {
		promMicroMetrics.registerNewGauge('my_metric', 'my_value', () => 999999999);
		const metricsText = await promMicroMetrics.getPlainText();
		assert.notEqual(metricsText.indexOf('my_metric'), -1);
		assert.notEqual(metricsText.indexOf('my_value'), -1);
		assert.notEqual(metricsText.indexOf(999999999), -1);
	});
});
