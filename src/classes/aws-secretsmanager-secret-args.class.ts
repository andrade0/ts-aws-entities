import { AwsSecretsmanagerSecretArgsIntterface } from '../interfaces';
import { AwsSecretsmanagerSecretArgsRotationRules } from '.';

export class AwsSecretsmanagerSecretArgs implements AwsSecretsmanagerSecretArgsIntterface {
  	name?: string;
	name_prefix?: string;
	description?: string;
	kms_key_id?: string;
	policy?: string;
	recovery_window_in_days?: string;
	rotation_lambda_arn?: string;
	rotation_rules?: AwsSecretsmanagerSecretArgsRotationRules;
	tags?: string;
	id: string;
	arn: string;
	rotation_enabled: string;

}
