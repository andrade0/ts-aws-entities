import { AwsNetworkAclArgsIntterface, AwsNetworkAclAttrsIntterface } from '.';

export interface AwsNetworkAclIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsNetworkAclArgsIntterface;
	attrs: AwsNetworkAclAttrsIntterface;

}
