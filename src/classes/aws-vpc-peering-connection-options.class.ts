import { AwsVpcPeeringConnectionOptionsIntterface } from '../interfaces';
import { AwsVpcPeeringConnectionOptionsArgs,  AwsVpcPeeringConnectionOptionsAttrs } from '.';

export class AwsVpcPeeringConnectionOptions implements AwsVpcPeeringConnectionOptionsIntterface {
  	name: string = 'aws_vpc_peering_connection_options';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/vpc_peering_options.html';
	groupName: string = 'VPC Resources';
	args: AwsVpcPeeringConnectionOptionsArgs;
	attrs: AwsVpcPeeringConnectionOptionsAttrs;

}
