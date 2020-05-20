import { AwsRamResourceShareArgsIntterface, AwsRamResourceShareAttrsIntterface } from '.';

export interface AwsRamResourceShareIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsRamResourceShareArgsIntterface;
  attrs: AwsRamResourceShareAttrsIntterface;

}
