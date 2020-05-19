import { AwsSecretsmanagerSecretVersionIntterface } from '../interfaces';
import { AwsSecretsmanagerSecretVersionArgs,  AwsSecretsmanagerSecretVersionAttrs } from '.';

export class AwsSecretsmanagerSecretVersion implements AwsSecretsmanagerSecretVersionIntterface {
  	name: string = 'aws_secretsmanager_secret_version';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html';
	groupName: string = 'Secrets Manager Resources';
	args: AwsSecretsmanagerSecretVersionArgs;
	attrs: AwsSecretsmanagerSecretVersionAttrs;

}
