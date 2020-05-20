import { AwsIamPolicyArgsIntterface, AwsIamPolicyAttrsIntterface } from '.';

export interface AwsIamPolicyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIamPolicyArgsIntterface;
  attrs: AwsIamPolicyAttrsIntterface;

}
