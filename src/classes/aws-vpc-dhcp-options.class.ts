import { AwsVpcDhcpOptionsIntterface } from '../interfaces';
import { AwsVpcDhcpOptionsArgs, AwsVpcDhcpOptionsAttrs } from '.';

export class AwsVpcDhcpOptions implements AwsVpcDhcpOptionsIntterface {
  name: string = 'aws_vpc_dhcp_options';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html';
  groupName: string = 'VPC Resources';
  args: AwsVpcDhcpOptionsArgs;
  attrs: AwsVpcDhcpOptionsAttrs;

}
