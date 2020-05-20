import { AwsOpsworksPermissionArgsIntterface, AwsOpsworksPermissionAttrsIntterface } from '.';

export interface AwsOpsworksPermissionIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsOpsworksPermissionArgsIntterface;
  attrs: AwsOpsworksPermissionAttrsIntterface;

}
