import { AwsIamUserLoginProfileIntterface } from '../interfaces';
import { AwsIamUserLoginProfileArgs, AwsIamUserLoginProfileAttrs } from '.';

export class AwsIamUserLoginProfile implements AwsIamUserLoginProfileIntterface {
  name: string = 'aws_iam_user_login_profile';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_user_login_profile.html';
  groupName: string = 'IAM Resources';
  args: AwsIamUserLoginProfileArgs;
  attrs: AwsIamUserLoginProfileAttrs;

}
