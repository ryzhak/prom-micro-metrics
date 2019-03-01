
# Description
This package collects server metrics and exposes them to Prometheus.

# How to install
```
npm i prom-micro-metrics --save
```

# How to use
```
const  express  =  require('express');
const  promMicroMetrics  =  require('prom-micro-metrics');

promMicroMetrics.init();
const  app  =  express();
app.get('/metrics', async (req, res) => {
    res.send(await  promMicroMetrics.getPlainText());
});
app.listen();
```
# How to run tests
```
npm run test
```

# Metrics output
```
# HELP process_cpu_user_seconds_total Total user CPU time spent in seconds.
# TYPE process_cpu_user_seconds_total counter
process_cpu_user_seconds_total 0.000885 1551441025866

# HELP process_cpu_system_seconds_total Total system CPU time spent in seconds.
# TYPE process_cpu_system_seconds_total counter
process_cpu_system_seconds_total 0 1551441025866

# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 0.000885 1551441025866

# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1551441026

# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 52404224 1551441025879

# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 699277312 1551441025879

# HELP process_heap_bytes Process heap size in bytes.
# TYPE process_heap_bytes gauge
process_heap_bytes 112791552 1551441025879

# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 22 1551441025872

# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 1621518

# HELP nodejs_eventloop_lag_seconds Lag of event loop in seconds.
# TYPE nodejs_eventloop_lag_seconds gauge
nodejs_eventloop_lag_seconds 0.005345405 1551441025872

# HELP nodejs_active_handles_total Number of active handles.
# TYPE nodejs_active_handles_total gauge
nodejs_active_handles_total 2 1551441025867

# HELP nodejs_active_requests_total Number of active requests.
# TYPE nodejs_active_requests_total gauge
nodejs_active_requests_total 3 1551441025867

# HELP nodejs_heap_size_total_bytes Process heap size from node.js in bytes.
# TYPE nodejs_heap_size_total_bytes gauge
nodejs_heap_size_total_bytes 34324480 1551441025868

# HELP nodejs_heap_size_used_bytes Process heap size used from node.js in bytes.
# TYPE nodejs_heap_size_used_bytes gauge
nodejs_heap_size_used_bytes 15788424 1551441025868

# HELP nodejs_external_memory_bytes Nodejs external memory size in bytes.
# TYPE nodejs_external_memory_bytes gauge
nodejs_external_memory_bytes 340179 1551441025868

# HELP nodejs_heap_space_size_total_bytes Process heap space size total from node.js in bytes.
# TYPE nodejs_heap_space_size_total_bytes gauge
nodejs_heap_space_size_total_bytes{space="read_only"} 524288 1551441025868
nodejs_heap_space_size_total_bytes{space="new"} 16777216 1551441025868
nodejs_heap_space_size_total_bytes{space="old"} 12816384 1551441025868
nodejs_heap_space_size_total_bytes{space="code"} 1572864 1551441025868
nodejs_heap_space_size_total_bytes{space="map"} 1060864 1551441025868
nodejs_heap_space_size_total_bytes{space="large_object"} 1572864 1551441025868

# HELP nodejs_heap_space_size_used_bytes Process heap space size used from node.js in bytes.
# TYPE nodejs_heap_space_size_used_bytes gauge
nodejs_heap_space_size_used_bytes{space="read_only"} 35200 1551441025868
nodejs_heap_space_size_used_bytes{space="new"} 2832144 1551441025868
nodejs_heap_space_size_used_bytes{space="old"} 10863968 1551441025868
nodejs_heap_space_size_used_bytes{space="code"} 940800 1551441025868
nodejs_heap_space_size_used_bytes{space="map"} 875072 1551441025868
nodejs_heap_space_size_used_bytes{space="large_object"} 249120 1551441025868

# HELP nodejs_heap_space_size_available_bytes Process heap space size available from node.js in bytes.
# TYPE nodejs_heap_space_size_available_bytes gauge
nodejs_heap_space_size_available_bytes{space="read_only"} 480384 1551441025868
nodejs_heap_space_size_available_bytes{space="new"} 5417200 1551441025868
nodejs_heap_space_size_available_bytes{space="old"} 450776 1551441025868
nodejs_heap_space_size_available_bytes{space="code"} 736 1551441025868
nodejs_heap_space_size_available_bytes{space="map"} 80 1551441025868
nodejs_heap_space_size_available_bytes{space="large_object"} 1492393472 1551441025868

# HELP nodejs_version_info Node.js version info.
# TYPE nodejs_version_info gauge
nodejs_version_info{version="v10.13.0",major="10",minor="13",patch="0"} 1

# HELP sys_info_time_uptime System uptime in seconds
# TYPE sys_info_time_uptime gauge
sys_info_time_uptime 10085 1551441026323

# HELP sys_info_cpu_temperature_main CPU main temperature (avg)
# TYPE sys_info_cpu_temperature_main gauge
sys_info_cpu_temperature_main 50 1551441026323

# HELP sys_info_cpu_temperature_max CPU max temperature
# TYPE sys_info_cpu_temperature_max gauge
sys_info_cpu_temperature_max 50 1551441026323

# HELP sys_info_mem_total Total RAM memory in bytes
# TYPE sys_info_mem_total gauge
sys_info_mem_total 16713207808 1551441026323

# HELP sys_info_mem_free RAM memory not used in bytes
# TYPE sys_info_mem_free gauge
sys_info_mem_free 10500460544 1551441026323

# HELP sys_info_mem_used RAM memory used (incl. buffers/cache)
# TYPE sys_info_mem_used gauge
sys_info_mem_used 6213099520 1551441026323

# HELP sys_info_mem_swaptotal SWAP total in bytes
# TYPE sys_info_mem_swaptotal gauge
sys_info_mem_swaptotal 2147479552 1551441026323

# HELP sys_info_mem_swapused SWAP used in bytes
# TYPE sys_info_mem_swapused gauge
sys_info_mem_swapused 0 1551441026323

# HELP sys_info_mem_swapfree SWAP free in bytes
# TYPE sys_info_mem_swapfree gauge
sys_info_mem_swapfree 2147479552 1551441026323

# HELP sys_info_current_load_avgload Average CPU load
# TYPE sys_info_current_load_avgload gauge
sys_info_current_load_avgload 0.02 1551441026323

# HELP sys_info_current_load_currentload CPU load in %
# TYPE sys_info_current_load_currentload gauge
sys_info_current_load_currentload 8.993576017130621 1551441026323

# HELP sys_info_current_load_currentload_user CPU load user in %
# TYPE sys_info_current_load_currentload_user gauge
sys_info_current_load_currentload_user 3.2119914346895073 1551441026323

# HELP sys_info_current_load_currentload_system CPU load system in %
# TYPE sys_info_current_load_currentload_system gauge
sys_info_current_load_currentload_system 5.781584582441114 1551441026323

# HELP sys_info_current_load_currentload_nice CPU load nice in %
# TYPE sys_info_current_load_currentload_nice gauge
sys_info_current_load_currentload_nice 0 1551441026323

# HELP sys_info_current_load_currentload_idle CPU load idle in %
# TYPE sys_info_current_load_currentload_idle gauge
sys_info_current_load_currentload_idle 91.00642398286938 1551441026323

# HELP sys_info_full_load CPU full load since bootup in %
# TYPE sys_info_full_load gauge
sys_info_full_load 3.2029530619365274 1551441026323

# HELP sys_info_processes_all # of all processes
# TYPE sys_info_processes_all gauge
sys_info_processes_all 311 1551441026323

# HELP sys_info_processes_running # of all processes running
# TYPE sys_info_processes_running gauge
sys_info_processes_running 4 1551441026323

# HELP sys_info_processes_blocked # of all processes blocked
# TYPE sys_info_processes_blocked gauge
sys_info_processes_blocked 0 1551441026323

# HELP sys_info_processes_sleeping # of all processes sleeping
# TYPE sys_info_processes_sleeping gauge
sys_info_processes_sleeping 227 1551441026323

# HELP sys_info_network_connections_all # of all network connections
# TYPE sys_info_network_connections_all gauge
sys_info_network_connections_all 20 1551441026323
```