import { AwsVpcEndpointRouteTableAssociationIntterface } from '../interfaces';
import { AwsVpcEndpointRouteTableAssociationArgs,  AwsVpcEndpointRouteTableAssociationAttrs } from '.';

export class AwsVpcEndpointRouteTableAssociation implements AwsVpcEndpointRouteTableAssociationIntterface {
  	name: string = 'aws_vpc_endpoint_route_table_association';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_route_table_association.html';
	groupName: string = 'VPC Resources';
	args: AwsVpcEndpointRouteTableAssociationArgs;
	attrs: AwsVpcEndpointRouteTableAssociationAttrs;

}
