import { AwsRouteTablesArgsIntterface, AwsRouteTablesAttrsIntterface } from '.';

export interface AwsRouteTablesIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsRouteTablesArgsIntterface;
	attrs: AwsRouteTablesAttrsIntterface;

}
