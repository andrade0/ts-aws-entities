import { AwsIotEndpointArgsIntterface, AwsIotEndpointAttrsIntterface } from '.';

export interface AwsIotEndpointIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsIotEndpointArgsIntterface;
	attrs: AwsIotEndpointAttrsIntterface;

}
