import { AwsS3BucketArgsDestinationIntterface } from '../interfaces';


export class AwsS3BucketArgsDestination implements AwsS3BucketArgsDestinationIntterface {
  	bucket: string;
	storage_class?: string;
	replica_kms_key_id?: string;
	access_control_translation?: string;
	account_id?: string;

}
