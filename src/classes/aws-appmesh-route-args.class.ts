import { AwsAppmeshRouteArgsIntterface } from '../interfaces';
import { AwsAppmeshRouteArgsSpec,  AwsAppmeshRouteArgsAction,  AwsAppmeshRouteArgsMatch } from '.';

export class AwsAppmeshRouteArgs implements AwsAppmeshRouteArgsIntterface {
  	name: string;
	mesh_name: string;
	virtual_route_name: string;
	spec: AwsAppmeshRouteArgsSpec;
	action: AwsAppmeshRouteArgsAction;
	match: AwsAppmeshRouteArgsMatch;
	virtual_node: string;
	weight: string;

}
