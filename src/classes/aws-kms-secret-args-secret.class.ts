import { AwsKmsSecretArgsSecretIntterface } from '../interfaces';


export class AwsKmsSecretArgsSecret implements AwsKmsSecretArgsSecretIntterface {
  name: string;
  payload: string;
  context?: string;
  grant_tokens?: string;

}
