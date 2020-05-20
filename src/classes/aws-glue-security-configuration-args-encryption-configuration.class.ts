import { AwsGlueSecurityConfigurationArgsEncryptionConfigurationIntterface } from '../interfaces';


export class AwsGlueSecurityConfigurationArgsEncryptionConfiguration implements AwsGlueSecurityConfigurationArgsEncryptionConfigurationIntterface {
  cloudwatch_encryption: string;
  job_bookmarks_encryption: string;
  s3_encryption: string;

}
