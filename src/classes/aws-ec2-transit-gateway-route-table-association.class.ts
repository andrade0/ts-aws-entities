import { AwsEc2TransitGatewayRouteTableAssociationIntterface } from '../interfaces';
import { AwsEc2TransitGatewayRouteTableAssociationArgs,  AwsEc2TransitGatewayRouteTableAssociationAttrs } from '.';

export class AwsEc2TransitGatewayRouteTableAssociation implements AwsEc2TransitGatewayRouteTableAssociationIntterface {
  	name: string = 'aws_ec2_transit_gateway_route_table_association';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_association.html';
	groupName: string = 'EC2 Resources';
	args: AwsEc2TransitGatewayRouteTableAssociationArgs;
	attrs: AwsEc2TransitGatewayRouteTableAssociationAttrs;

}
