import { AwsOpsworksStackArgsIntterface, AwsOpsworksStackAttrsIntterface } from '.';

export interface AwsOpsworksStackIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsOpsworksStackArgsIntterface;
  attrs: AwsOpsworksStackAttrsIntterface;

}
