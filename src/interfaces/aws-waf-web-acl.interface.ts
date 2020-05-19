import { AwsWafWebAclArgsIntterface, AwsWafWebAclAttrsIntterface } from '.';

export interface AwsWafWebAclIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsWafWebAclArgsIntterface;
	attrs: AwsWafWebAclAttrsIntterface;

}
