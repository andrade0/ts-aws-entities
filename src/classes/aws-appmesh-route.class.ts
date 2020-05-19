import { AwsAppmeshRouteIntterface } from '../interfaces';
import { AwsAppmeshRouteArgs,  AwsAppmeshRouteAttrs } from '.';

export class AwsAppmeshRoute implements AwsAppmeshRouteIntterface {
  	name: string = 'aws_appmesh_route';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/appmesh_route.html';
	groupName: string = 'AppMesh Resources';
	args: AwsAppmeshRouteArgs;
	attrs: AwsAppmeshRouteAttrs;

}
