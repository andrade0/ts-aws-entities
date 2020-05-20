import { AwsOpsworksUserProfileArgsIntterface, AwsOpsworksUserProfileAttrsIntterface } from '.';

export interface AwsOpsworksUserProfileIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsOpsworksUserProfileArgsIntterface;
  attrs: AwsOpsworksUserProfileAttrsIntterface;

}
