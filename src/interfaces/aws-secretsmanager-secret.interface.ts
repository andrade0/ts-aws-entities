import { AwsSecretsmanagerSecretArgsIntterface, AwsSecretsmanagerSecretAttrsIntterface } from '.';

export interface AwsSecretsmanagerSecretIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSecretsmanagerSecretArgsIntterface;
	attrs: AwsSecretsmanagerSecretAttrsIntterface;

}
