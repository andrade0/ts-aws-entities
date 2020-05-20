import { AwsAmiLaunchPermissionArgsIntterface, AwsAmiLaunchPermissionAttrsIntterface } from '.';

export interface AwsAmiLaunchPermissionIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAmiLaunchPermissionArgsIntterface;
  attrs: AwsAmiLaunchPermissionAttrsIntterface;

}
