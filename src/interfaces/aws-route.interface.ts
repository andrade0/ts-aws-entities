import { AwsRouteArgsIntterface, AwsRouteAttrsIntterface } from '.';

export interface AwsRouteIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsRouteArgsIntterface;
	attrs: AwsRouteAttrsIntterface;

}
