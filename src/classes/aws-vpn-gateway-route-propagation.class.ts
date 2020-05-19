import { AwsVpnGatewayRoutePropagationIntterface } from '../interfaces';
import { AwsVpnGatewayRoutePropagationArgs,  AwsVpnGatewayRoutePropagationAttrs } from '.';

export class AwsVpnGatewayRoutePropagation implements AwsVpnGatewayRoutePropagationIntterface {
  	name: string = 'aws_vpn_gateway_route_propagation';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/vpn_gateway_route_propagation.html';
	groupName: string = 'VPC Resources';
	args: AwsVpnGatewayRoutePropagationArgs;
	attrs: AwsVpnGatewayRoutePropagationAttrs;

}
