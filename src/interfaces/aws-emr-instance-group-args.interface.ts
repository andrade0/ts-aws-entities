import { AwsEmrInstanceGroupArgsEbsConfigIntterface } from '.';

export interface AwsEmrInstanceGroupArgsIntterface {
  	name: string;
	cluster_id: string;
	instance_type: string;
	instance_count?: string;
	ebs_optimized?: string;
	ebs_config?: AwsEmrInstanceGroupArgsEbsConfigIntterface;

}
