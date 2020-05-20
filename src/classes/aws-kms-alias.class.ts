import { AwsKmsAliasIntterface } from '../interfaces';
import { AwsKmsAliasArgs, AwsKmsAliasAttrs } from '.';

export class AwsKmsAlias implements AwsKmsAliasIntterface {
  name: string = 'aws_kms_alias';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/kms_alias.html';
  groupName: string = 'KMS Resources';
  args: AwsKmsAliasArgs;
  attrs: AwsKmsAliasAttrs;

}
