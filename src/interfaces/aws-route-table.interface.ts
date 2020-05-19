import { AwsRouteTableArgsIntterface, AwsRouteTableAttrsIntterface } from '.';

export interface AwsRouteTableIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsRouteTableArgsIntterface;
	attrs: AwsRouteTableAttrsIntterface;

}
