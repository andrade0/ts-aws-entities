import { AwsIamGroupIntterface } from '../interfaces';
import { AwsIamGroupArgs, AwsIamGroupAttrs } from '.';

export class AwsIamGroup implements AwsIamGroupIntterface {
  name: string = 'aws_iam_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_group.html';
  groupName: string = 'IAM Resources';
  args: AwsIamGroupArgs;
  attrs: AwsIamGroupAttrs;

}
