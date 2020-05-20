import { AwsIamGroupPolicyIntterface } from '../interfaces';
import { AwsIamGroupPolicyArgs, AwsIamGroupPolicyAttrs } from '.';

export class AwsIamGroupPolicy implements AwsIamGroupPolicyIntterface {
  name: string = 'aws_iam_group_policy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_group_policy.html';
  groupName: string = 'IAM Resources';
  args: AwsIamGroupPolicyArgs;
  attrs: AwsIamGroupPolicyAttrs;

}
