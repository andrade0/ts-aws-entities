import { AwsVpcIpv4CidrBlockAssociationIntterface } from '../interfaces';
import { AwsVpcIpv4CidrBlockAssociationArgs, AwsVpcIpv4CidrBlockAssociationAttrs } from '.';

export class AwsVpcIpv4CidrBlockAssociation implements AwsVpcIpv4CidrBlockAssociationIntterface {
  name: string = 'aws_vpc_ipv4_cidr_block_association';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/vpc_ipv4_cidr_block_association.html';
  groupName: string = 'VPC Resources';
  args: AwsVpcIpv4CidrBlockAssociationArgs;
  attrs: AwsVpcIpv4CidrBlockAssociationAttrs;

}
