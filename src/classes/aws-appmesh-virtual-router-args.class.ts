import { AwsAppmeshVirtualRouterArgsIntterface } from '../interfaces';
import { AwsAppmeshVirtualRouterArgsSpec } from '.';

export class AwsAppmeshVirtualRouterArgs implements AwsAppmeshVirtualRouterArgsIntterface {
  name: string;
  mesh_name: string;
  spec: AwsAppmeshVirtualRouterArgsSpec;

}
