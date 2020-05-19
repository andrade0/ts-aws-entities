import { AwsSecurityGroupArgsIntterface, AwsSecurityGroupAttrsIntterface } from '.';

export interface AwsSecurityGroupIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSecurityGroupArgsIntterface;
	attrs: AwsSecurityGroupAttrsIntterface;

}
