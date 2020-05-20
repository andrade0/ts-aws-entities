import { AwsKmsSecretArgsIntterface, AwsKmsSecretAttrsIntterface } from '.';

export interface AwsKmsSecretIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsKmsSecretArgsIntterface;
  attrs: AwsKmsSecretAttrsIntterface;

}
