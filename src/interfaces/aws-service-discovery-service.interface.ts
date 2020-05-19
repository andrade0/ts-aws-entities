import { AwsServiceDiscoveryServiceArgsIntterface, AwsServiceDiscoveryServiceAttrsIntterface } from '.';

export interface AwsServiceDiscoveryServiceIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsServiceDiscoveryServiceArgsIntterface;
	attrs: AwsServiceDiscoveryServiceAttrsIntterface;

}
