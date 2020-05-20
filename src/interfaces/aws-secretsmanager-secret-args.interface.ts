import { AwsSecretsmanagerSecretArgsRotationRulesIntterface } from '.';

export interface AwsSecretsmanagerSecretArgsIntterface {
  name?: string;
  name_prefix?: string;
  description?: string;
  kms_key_id?: string;
  policy?: string;
  recovery_window_in_days?: string;
  rotation_lambda_arn?: string;
  rotation_rules?: AwsSecretsmanagerSecretArgsRotationRulesIntterface;
  tags?: string;
  id: string;
  arn: string;
  rotation_enabled: string;

}
