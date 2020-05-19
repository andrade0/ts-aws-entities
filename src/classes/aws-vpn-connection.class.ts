import { AwsVpnConnectionIntterface } from '../interfaces';
import { AwsVpnConnectionArgs,  AwsVpnConnectionAttrs } from '.';

export class AwsVpnConnection implements AwsVpnConnectionIntterface {
  	name: string = 'aws_vpn_connection';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/vpn_connection.html';
	groupName: string = 'VPC Resources';
	args: AwsVpnConnectionArgs;
	attrs: AwsVpnConnectionAttrs;

}
