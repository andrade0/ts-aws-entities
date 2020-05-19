import { AwsSecurityGroupsArgsIntterface, AwsSecurityGroupsAttrsIntterface } from '.';

export interface AwsSecurityGroupsIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSecurityGroupsArgsIntterface;
	attrs: AwsSecurityGroupsAttrsIntterface;

}
