import { AwsDefaultSecurityGroupArgsIntterface, AwsDefaultSecurityGroupAttrsIntterface } from '.';

export interface AwsDefaultSecurityGroupIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsDefaultSecurityGroupArgsIntterface;
	attrs: AwsDefaultSecurityGroupAttrsIntterface;

}
