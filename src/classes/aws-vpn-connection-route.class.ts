import { AwsVpnConnectionRouteIntterface } from '../interfaces';
import { AwsVpnConnectionRouteArgs, AwsVpnConnectionRouteAttrs } from '.';

export class AwsVpnConnectionRoute implements AwsVpnConnectionRouteIntterface {
  name: string = 'aws_vpn_connection_route';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/vpn_connection_route.html';
  groupName: string = 'VPC Resources';
  args: AwsVpnConnectionRouteArgs;
  attrs: AwsVpnConnectionRouteAttrs;

}
