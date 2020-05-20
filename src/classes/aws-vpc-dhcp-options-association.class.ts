import { AwsVpcDhcpOptionsAssociationIntterface } from '../interfaces';
import { AwsVpcDhcpOptionsAssociationArgs, AwsVpcDhcpOptionsAssociationAttrs } from '.';

export class AwsVpcDhcpOptionsAssociation implements AwsVpcDhcpOptionsAssociationIntterface {
  name: string = 'aws_vpc_dhcp_options_association';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options_association.html';
  groupName: string = 'VPC Resources';
  args: AwsVpcDhcpOptionsAssociationArgs;
  attrs: AwsVpcDhcpOptionsAssociationAttrs;

}
