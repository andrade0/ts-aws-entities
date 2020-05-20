import { AwsKmsSecretsIntterface } from '../interfaces';
import { AwsKmsSecretsArgs, AwsKmsSecretsAttrs } from '.';

export class AwsKmsSecrets implements AwsKmsSecretsIntterface {
  name: string = 'aws_kms_secrets';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/kms_secrets.html';
  groupName: string = 'Data Sources';
  args: AwsKmsSecretsArgs;
  attrs: AwsKmsSecretsAttrs;

}
