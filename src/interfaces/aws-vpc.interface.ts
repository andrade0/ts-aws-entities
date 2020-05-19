import { AwsVpcArgsIntterface, AwsVpcAttrsIntterface } from '.';

export interface AwsVpcIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsVpcArgsIntterface;
	attrs: AwsVpcAttrsIntterface;

}
