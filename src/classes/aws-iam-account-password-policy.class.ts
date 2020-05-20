import { AwsIamAccountPasswordPolicyIntterface } from '../interfaces';
import { AwsIamAccountPasswordPolicyArgs, AwsIamAccountPasswordPolicyAttrs } from '.';

export class AwsIamAccountPasswordPolicy implements AwsIamAccountPasswordPolicyIntterface {
  name: string = 'aws_iam_account_password_policy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html';
  groupName: string = 'IAM Resources';
  args: AwsIamAccountPasswordPolicyArgs;
  attrs: AwsIamAccountPasswordPolicyAttrs;

}
