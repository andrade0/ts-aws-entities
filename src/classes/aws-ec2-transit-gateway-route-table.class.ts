import { AwsEc2TransitGatewayRouteTableIntterface } from '../interfaces';
import { AwsEc2TransitGatewayRouteTableArgs,  AwsEc2TransitGatewayRouteTableAttrs } from '.';

export class AwsEc2TransitGatewayRouteTable implements AwsEc2TransitGatewayRouteTableIntterface {
  	name: string = 'aws_ec2_transit_gateway_route_table';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table.html';
	groupName: string = 'EC2 Resources';
	args: AwsEc2TransitGatewayRouteTableArgs;
	attrs: AwsEc2TransitGatewayRouteTableAttrs;

}
