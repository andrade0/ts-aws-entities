import { AwsSecretsmanagerSecretIntterface } from '../interfaces';
import { AwsSecretsmanagerSecretArgs,  AwsSecretsmanagerSecretAttrs } from '.';

export class AwsSecretsmanagerSecret implements AwsSecretsmanagerSecretIntterface {
  	name: string = 'aws_secretsmanager_secret';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html';
	groupName: string = 'Secrets Manager Resources';
	args: AwsSecretsmanagerSecretArgs;
	attrs: AwsSecretsmanagerSecretAttrs;

}
