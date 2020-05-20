import { AwsElbArgsAccessLogsIntterface, AwsElbArgsHealthCheckIntterface, AwsElbArgsListenerIntterface } from '.';

export interface AwsElbArgsIntterface {
  name?: string;
  name_prefix: string;
  access_logs?: AwsElbArgsAccessLogsIntterface;
  availability_zones: string;
  security_groups?: string;
  subnets: string;
  instances?: string;
  internal?: string;
  listener: AwsElbArgsListenerIntterface;
  health_check?: AwsElbArgsHealthCheckIntterface;
  cross_zone_load_balancing?: string;
  idle_timeout?: string;
  connection_draining?: boolean;
  connection_draining_timeout?: string;
  tags?: string;

}
