import { AwsKmsSecretsArgsSecretIntterface } from '../interfaces';


export class AwsKmsSecretsArgsSecret implements AwsKmsSecretsArgsSecretIntterface {
  name: string;
  payload: string;
  context?: string;
  grant_tokens?: string;

}
