import { AwsElbArgsIntterface } from '../interfaces';
import { AwsElbArgsAccessLogs, AwsElbArgsHealthCheck, AwsElbArgsListener } from '.';

export class AwsElbArgs implements AwsElbArgsIntterface {
  name?: string;
  name_prefix: string;
  access_logs?: AwsElbArgsAccessLogs;
  availability_zones: string;
  security_groups?: string;
  subnets: string;
  instances?: string;
  internal?: string;
  listener: AwsElbArgsListener;
  health_check?: AwsElbArgsHealthCheck;
  cross_zone_load_balancing?: string;
  idle_timeout?: string;
  connection_draining?: boolean;
  connection_draining_timeout?: string;
  tags?: string;

}
