import { AwsSecretsmanagerSecretVersionArgsIntterface, AwsSecretsmanagerSecretVersionAttrsIntterface } from '.';

export interface AwsSecretsmanagerSecretVersionIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsSecretsmanagerSecretVersionArgsIntterface;
  attrs: AwsSecretsmanagerSecretVersionAttrsIntterface;

}
