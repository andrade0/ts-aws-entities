import { AwsEmrInstanceGroupArgsIntterface } from '../interfaces';
import { AwsEmrInstanceGroupArgsEbsConfig } from '.';

export class AwsEmrInstanceGroupArgs implements AwsEmrInstanceGroupArgsIntterface {
  name: string;
  cluster_id: string;
  instance_type: string;
  instance_count?: string;
  ebs_optimized?: string;
  ebs_config?: AwsEmrInstanceGroupArgsEbsConfig;

}
