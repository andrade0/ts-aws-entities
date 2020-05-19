import { AwsVpcPeeringConnectionAccepterIntterface } from '../interfaces';
import { AwsVpcPeeringConnectionAccepterArgs,  AwsVpcPeeringConnectionAccepterAttrs } from '.';

export class AwsVpcPeeringConnectionAccepter implements AwsVpcPeeringConnectionAccepterIntterface {
  	name: string = 'aws_vpc_peering_connection_accepter';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/vpc_peering_accepter.html';
	groupName: string = 'VPC Resources';
	args: AwsVpcPeeringConnectionAccepterArgs;
	attrs: AwsVpcPeeringConnectionAccepterAttrs;

}
