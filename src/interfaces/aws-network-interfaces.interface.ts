import { AwsNetworkInterfacesArgsIntterface, AwsNetworkInterfacesAttrsIntterface } from '.';

export interface AwsNetworkInterfacesIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsNetworkInterfacesArgsIntterface;
	attrs: AwsNetworkInterfacesAttrsIntterface;

}
