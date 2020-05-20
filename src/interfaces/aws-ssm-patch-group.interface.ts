import { AwsSsmPatchGroupArgsIntterface, AwsSsmPatchGroupAttrsIntterface } from '.';

export interface AwsSsmPatchGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsSsmPatchGroupArgsIntterface;
  attrs: AwsSsmPatchGroupAttrsIntterface;

}
