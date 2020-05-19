import { AwsAppmeshRouteArgsSpecIntterface, AwsAppmeshRouteArgsActionIntterface, AwsAppmeshRouteArgsMatchIntterface } from '.';

export interface AwsAppmeshRouteArgsIntterface {
  	name: string;
	mesh_name: string;
	virtual_route_name: string;
	spec: AwsAppmeshRouteArgsSpecIntterface;
	action: AwsAppmeshRouteArgsActionIntterface;
	match: AwsAppmeshRouteArgsMatchIntterface;
	virtual_node: string;
	weight: string;

}
