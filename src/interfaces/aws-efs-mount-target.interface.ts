import { AwsEfsMountTargetArgsIntterface, AwsEfsMountTargetAttrsIntterface } from '.';

export interface AwsEfsMountTargetIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsEfsMountTargetArgsIntterface;
	attrs: AwsEfsMountTargetAttrsIntterface;

}
