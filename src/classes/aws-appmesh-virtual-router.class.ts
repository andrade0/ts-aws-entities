import { AwsAppmeshVirtualRouterIntterface } from '../interfaces';
import { AwsAppmeshVirtualRouterArgs,  AwsAppmeshVirtualRouterAttrs } from '.';

export class AwsAppmeshVirtualRouter implements AwsAppmeshVirtualRouterIntterface {
  	name: string = 'aws_appmesh_virtual_router';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html';
	groupName: string = 'AppMesh Resources';
	args: AwsAppmeshVirtualRouterArgs;
	attrs: AwsAppmeshVirtualRouterAttrs;

}
