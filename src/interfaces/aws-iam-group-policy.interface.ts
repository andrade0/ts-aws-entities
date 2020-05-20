import { AwsIamGroupPolicyArgsIntterface, AwsIamGroupPolicyAttrsIntterface } from '.';

export interface AwsIamGroupPolicyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIamGroupPolicyArgsIntterface;
  attrs: AwsIamGroupPolicyAttrsIntterface;

}
