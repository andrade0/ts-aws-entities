import { AwsVpnConnectionRouteArgsIntterface, AwsVpnConnectionRouteAttrsIntterface } from '.';

export interface AwsVpnConnectionRouteIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsVpnConnectionRouteArgsIntterface;
	attrs: AwsVpnConnectionRouteAttrsIntterface;

}
