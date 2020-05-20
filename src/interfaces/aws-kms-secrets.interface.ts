import { AwsKmsSecretsArgsIntterface, AwsKmsSecretsAttrsIntterface } from '.';

export interface AwsKmsSecretsIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsKmsSecretsArgsIntterface;
  attrs: AwsKmsSecretsAttrsIntterface;

}
