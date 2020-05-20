import { AwsVpcPeeringConnectionIntterface } from '../interfaces';
import { AwsVpcPeeringConnectionArgs, AwsVpcPeeringConnectionAttrs } from '.';

export class AwsVpcPeeringConnection implements AwsVpcPeeringConnectionIntterface {
  name: string = 'aws_vpc_peering_connection';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/vpc_peering.html';
  groupName: string = 'VPC Resources';
  args: AwsVpcPeeringConnectionArgs;
  attrs: AwsVpcPeeringConnectionAttrs;

}
