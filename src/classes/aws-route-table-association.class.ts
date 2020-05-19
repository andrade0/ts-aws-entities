import { AwsRouteTableAssociationIntterface } from '../interfaces';
import { AwsRouteTableAssociationArgs,  AwsRouteTableAssociationAttrs } from '.';

export class AwsRouteTableAssociation implements AwsRouteTableAssociationIntterface {
  	name: string = 'aws_route_table_association';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/route_table_association.html';
	groupName: string = 'VPC Resources';
	args: AwsRouteTableAssociationArgs;
	attrs: AwsRouteTableAssociationAttrs;

}
