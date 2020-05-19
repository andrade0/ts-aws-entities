import { AwsVpnConnectionArgsIntterface, AwsVpnConnectionAttrsIntterface } from '.';

export interface AwsVpnConnectionIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsVpnConnectionArgsIntterface;
	attrs: AwsVpnConnectionAttrsIntterface;

}
