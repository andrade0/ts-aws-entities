import { AwsGlueSecurityConfigurationArgsIntterface } from '../interfaces';
import { AwsGlueSecurityConfigurationArgsEncryptionConfiguration } from '.';

export class AwsGlueSecurityConfigurationArgs implements AwsGlueSecurityConfigurationArgsIntterface {
  	encryption_configuration: AwsGlueSecurityConfigurationArgsEncryptionConfiguration;
	name: string;
	cloudwatch_encryption_mode?: string;
	kms_key_arn?: string;
	job_bookmarks_encryption_mode?: string;
	s3_encryption_mode?: string;

}
