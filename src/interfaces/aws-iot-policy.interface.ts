import { AwsIotPolicyArgsIntterface, AwsIotPolicyAttrsIntterface } from '.';

export interface AwsIotPolicyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIotPolicyArgsIntterface;
  attrs: AwsIotPolicyAttrsIntterface;

}
