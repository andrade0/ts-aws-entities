import { AwsSecretsmanagerSecretVersionArgsIntterface } from '../interfaces';


export class AwsSecretsmanagerSecretVersionArgs implements AwsSecretsmanagerSecretVersionArgsIntterface {
  secret_id: string;
  secret_string?: string;
  secret_binary?: string;
  version_stages?: string;
  arn: string;
  id: string;
  version_id: string;

}
