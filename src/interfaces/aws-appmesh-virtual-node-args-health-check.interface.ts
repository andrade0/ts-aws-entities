export interface AwsAppmeshVirtualNodeArgsHealthCheckIntterface {
  healthy_threshold: string;
  interval_millis: string;
  protocol: string;
  timeout_millis: string;
  unhealthy_threshold: string;
  path?: string;
  port?: string;

}
