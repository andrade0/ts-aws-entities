import { AwsIamAccountAliasIntterface } from '../interfaces';
import { AwsIamAccountAliasArgs, AwsIamAccountAliasAttrs } from '.';

export class AwsIamAccountAlias implements AwsIamAccountAliasIntterface {
  name: string = 'aws_iam_account_alias';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_account_alias.html';
  groupName: string = 'IAM Resources';
  args: AwsIamAccountAliasArgs;
  attrs: AwsIamAccountAliasAttrs;

}
