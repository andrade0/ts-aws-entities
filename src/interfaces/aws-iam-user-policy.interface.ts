import { AwsIamUserPolicyArgsIntterface, AwsIamUserPolicyAttrsIntterface } from '.';

export interface AwsIamUserPolicyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIamUserPolicyArgsIntterface;
  attrs: AwsIamUserPolicyAttrsIntterface;

}
