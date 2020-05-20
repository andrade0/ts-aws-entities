import { AwsAthenaDatabaseArgsEncryptionConfigurationIntterface } from '.';

export interface AwsAthenaDatabaseArgsIntterface {
  name: string;
  bucket: string;
  encryption_configuration?: AwsAthenaDatabaseArgsEncryptionConfigurationIntterface;
  force_destroy: string;

}
