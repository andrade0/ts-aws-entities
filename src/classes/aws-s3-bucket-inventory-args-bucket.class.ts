import { AwsS3BucketInventoryArgsBucketIntterface } from '../interfaces';


export class AwsS3BucketInventoryArgsBucket implements AwsS3BucketInventoryArgsBucketIntterface {
  	bucket_arn: string;
	format: string;
	account_id?: string;
	prefix?: string;
	encryption?: string;

}
