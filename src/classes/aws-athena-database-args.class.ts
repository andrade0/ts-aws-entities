import { AwsAthenaDatabaseArgsIntterface } from '../interfaces';
import { AwsAthenaDatabaseArgsEncryptionConfiguration } from '.';

export class AwsAthenaDatabaseArgs implements AwsAthenaDatabaseArgsIntterface {
  	name: string;
	bucket: string;
	encryption_configuration?: AwsAthenaDatabaseArgsEncryptionConfiguration;
	force_destroy: string;

}
