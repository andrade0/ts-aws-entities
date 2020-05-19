import { AwsS3BucketArgsObjectLockConfigurationIntterface } from '../interfaces';


export class AwsS3BucketArgsObjectLockConfiguration implements AwsS3BucketArgsObjectLockConfigurationIntterface {
  	object_lock_enabled: string;
	rule?: string;

}
