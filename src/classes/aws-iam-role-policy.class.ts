import { AwsIamRolePolicyIntterface } from '../interfaces';
import { AwsIamRolePolicyArgs, AwsIamRolePolicyAttrs } from '.';

export class AwsIamRolePolicy implements AwsIamRolePolicyIntterface {
  name: string = 'aws_iam_role_policy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_role_policy.html';
  groupName: string = 'IAM Resources';
  args: AwsIamRolePolicyArgs;
  attrs: AwsIamRolePolicyAttrs;

}
