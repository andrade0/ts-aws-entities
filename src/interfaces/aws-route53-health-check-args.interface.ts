export interface AwsRoute53HealthCheckArgsIntterface {
  reference_name?: string;
  fqdn?: string;
  ip_address?: string;
  port?: string;
  type: string;
  failure_threshold: string;
  request_interval: string;
  resource_path?: string;
  search_string?: string;
  measure_latency?: boolean;
  invert_healthcheck?: string;
  enable_sni?: string;
  child_healthchecks?: string;
  child_health_threshold?: string;
  cloudwatch_alarm_name?: string;
  cloudwatch_alarm_region?: string;
  insufficient_data_health_status?: string;
  regions?: string;
  tags?: string;

}
