import { AwsVpnGatewayIntterface } from '../interfaces';
import { AwsVpnGatewayArgs,  AwsVpnGatewayAttrs } from '.';

export class AwsVpnGateway implements AwsVpnGatewayIntterface {
  	name: string = 'aws_vpn_gateway';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/vpn_gateway.html';
	groupName: string = 'VPC Resources';
	args: AwsVpnGatewayArgs;
	attrs: AwsVpnGatewayAttrs;

}
