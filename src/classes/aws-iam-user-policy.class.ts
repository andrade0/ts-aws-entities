import { AwsIamUserPolicyIntterface } from '../interfaces';
import { AwsIamUserPolicyArgs, AwsIamUserPolicyAttrs } from '.';

export class AwsIamUserPolicy implements AwsIamUserPolicyIntterface {
  name: string = 'aws_iam_user_policy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_user_policy.html';
  groupName: string = 'IAM Resources';
  args: AwsIamUserPolicyArgs;
  attrs: AwsIamUserPolicyAttrs;

}
