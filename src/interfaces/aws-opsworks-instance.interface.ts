import { AwsOpsworksInstanceArgsIntterface, AwsOpsworksInstanceAttrsIntterface } from '.';

export interface AwsOpsworksInstanceIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsOpsworksInstanceArgsIntterface;
  attrs: AwsOpsworksInstanceAttrsIntterface;

}
