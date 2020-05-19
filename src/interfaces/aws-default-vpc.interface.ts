import { AwsDefaultVpcArgsIntterface, AwsDefaultVpcAttrsIntterface } from '.';

export interface AwsDefaultVpcIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsDefaultVpcArgsIntterface;
	attrs: AwsDefaultVpcAttrsIntterface;

}
