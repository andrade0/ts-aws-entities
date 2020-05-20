import { AwsInstanceArgsCpuCoreCountIntterface } from '../interfaces';


export class AwsInstanceArgsCpuCoreCount implements AwsInstanceArgsCpuCoreCountIntterface {
  ebs_optimized?: string;
  disable_api_termination?: string;
  instance_initiated_shutdown_behavior?: string;
  instance_type: string;
  key_name?: string;
  get_password_data?: string;
  monitoring?: string;
  security_groups: string;

}
