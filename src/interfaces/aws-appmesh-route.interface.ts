import { AwsAppmeshRouteArgsIntterface, AwsAppmeshRouteAttrsIntterface } from '.';

export interface AwsAppmeshRouteIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsAppmeshRouteArgsIntterface;
	attrs: AwsAppmeshRouteAttrsIntterface;

}
