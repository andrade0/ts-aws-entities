import { AwsGlueSecurityConfigurationArgsEncryptionConfigurationIntterface } from '.';

export interface AwsGlueSecurityConfigurationArgsIntterface {
  encryption_configuration: AwsGlueSecurityConfigurationArgsEncryptionConfigurationIntterface;
  name: string;
  cloudwatch_encryption_mode?: string;
  kms_key_arn?: string;
  job_bookmarks_encryption_mode?: string;
  s3_encryption_mode?: string;

}
