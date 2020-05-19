import { AwsEc2TransitGatewayRouteTablePropagationIntterface } from '../interfaces';
import { AwsEc2TransitGatewayRouteTablePropagationArgs,  AwsEc2TransitGatewayRouteTablePropagationAttrs } from '.';

export class AwsEc2TransitGatewayRouteTablePropagation implements AwsEc2TransitGatewayRouteTablePropagationIntterface {
  	name: string = 'aws_ec2_transit_gateway_route_table_propagation';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_route_table_propagation.html';
	groupName: string = 'EC2 Resources';
	args: AwsEc2TransitGatewayRouteTablePropagationArgs;
	attrs: AwsEc2TransitGatewayRouteTablePropagationAttrs;

}
