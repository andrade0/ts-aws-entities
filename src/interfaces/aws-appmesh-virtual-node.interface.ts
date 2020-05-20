import { AwsAppmeshVirtualNodeArgsIntterface, AwsAppmeshVirtualNodeAttrsIntterface } from '.';

export interface AwsAppmeshVirtualNodeIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAppmeshVirtualNodeArgsIntterface;
  attrs: AwsAppmeshVirtualNodeAttrsIntterface;

}
