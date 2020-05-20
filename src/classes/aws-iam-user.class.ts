import { AwsIamUserIntterface } from '../interfaces';
import { AwsIamUserArgs, AwsIamUserAttrs } from '.';

export class AwsIamUser implements AwsIamUserIntterface {
  name: string = 'aws_iam_user';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_user.html';
  groupName: string = 'IAM Resources';
  args: AwsIamUserArgs;
  attrs: AwsIamUserAttrs;

}
