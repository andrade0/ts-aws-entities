import { AwsEc2TransitGatewayRouteIntterface } from '../interfaces';
import { AwsEc2TransitGatewayRouteArgs,  AwsEc2TransitGatewayRouteAttrs } from '.';

export class AwsEc2TransitGatewayRoute implements AwsEc2TransitGatewayRouteIntterface {
  	name: string = 'aws_ec2_transit_gateway_route';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route.html';
	groupName: string = 'EC2 Resources';
	args: AwsEc2TransitGatewayRouteArgs;
	attrs: AwsEc2TransitGatewayRouteAttrs;

}
