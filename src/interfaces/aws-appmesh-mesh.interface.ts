import { AwsAppmeshMeshArgsIntterface, AwsAppmeshMeshAttrsIntterface } from '.';

export interface AwsAppmeshMeshIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAppmeshMeshArgsIntterface;
  attrs: AwsAppmeshMeshAttrsIntterface;

}
