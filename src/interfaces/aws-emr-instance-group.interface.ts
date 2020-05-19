import { AwsEmrInstanceGroupArgsIntterface, AwsEmrInstanceGroupAttrsIntterface } from '.';

export interface AwsEmrInstanceGroupIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsEmrInstanceGroupArgsIntterface;
	attrs: AwsEmrInstanceGroupAttrsIntterface;

}
