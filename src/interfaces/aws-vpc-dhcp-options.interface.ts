import { AwsVpcDhcpOptionsArgsIntterface, AwsVpcDhcpOptionsAttrsIntterface } from '.';

export interface AwsVpcDhcpOptionsIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsVpcDhcpOptionsArgsIntterface;
	attrs: AwsVpcDhcpOptionsAttrsIntterface;

}
