import { AwsDefaultVpcDhcpOptionsIntterface } from '../interfaces';
import { AwsDefaultVpcDhcpOptionsArgs,  AwsDefaultVpcDhcpOptionsAttrs } from '.';

export class AwsDefaultVpcDhcpOptions implements AwsDefaultVpcDhcpOptionsIntterface {
  	name: string = 'aws_default_vpc_dhcp_options';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html';
	groupName: string = 'VPC Resources';
	args: AwsDefaultVpcDhcpOptionsArgs;
	attrs: AwsDefaultVpcDhcpOptionsAttrs;

}
