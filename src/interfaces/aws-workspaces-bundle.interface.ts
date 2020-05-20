import { AwsWorkspacesBundleArgsIntterface, AwsWorkspacesBundleAttrsIntterface } from '.';

export interface AwsWorkspacesBundleIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsWorkspacesBundleArgsIntterface;
  attrs: AwsWorkspacesBundleAttrsIntterface;

}
