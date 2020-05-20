import { AwsAppmeshVirtualNodeIntterface } from '../interfaces';
import { AwsAppmeshVirtualNodeArgs, AwsAppmeshVirtualNodeAttrs } from '.';

export class AwsAppmeshVirtualNode implements AwsAppmeshVirtualNodeIntterface {
  name: string = 'aws_appmesh_virtual_node';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html';
  groupName: string = 'AppMesh Resources';
  args: AwsAppmeshVirtualNodeArgs;
  attrs: AwsAppmeshVirtualNodeAttrs;

}
