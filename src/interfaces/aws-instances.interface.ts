import { AwsInstancesArgsIntterface, AwsInstancesAttrsIntterface } from '.';

export interface AwsInstancesIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsInstancesArgsIntterface;
  attrs: AwsInstancesAttrsIntterface;

}
