import { AwsAppmeshMeshIntterface } from '../interfaces';
import { AwsAppmeshMeshArgs, AwsAppmeshMeshAttrs } from '.';

export class AwsAppmeshMesh implements AwsAppmeshMeshIntterface {
  name: string = 'aws_appmesh_mesh';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html';
  groupName: string = 'AppMesh Resources';
  args: AwsAppmeshMeshArgs;
  attrs: AwsAppmeshMeshAttrs;

}
