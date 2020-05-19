import { AwsS3BucketInventoryArgsIntterface } from '../interfaces';
import { AwsS3BucketInventoryArgsBucket,  AwsS3BucketInventoryArgsSchedule,  AwsS3BucketInventoryArgsDestination,  AwsS3BucketInventoryArgsFilter,  AwsS3BucketInventoryArgsSseKms } from '.';

export class AwsS3BucketInventoryArgs implements AwsS3BucketInventoryArgsIntterface {
  	bucket: AwsS3BucketInventoryArgsBucket;
	name: string;
	included_object_versions: string;
	schedule: AwsS3BucketInventoryArgsSchedule;
	destination: AwsS3BucketInventoryArgsDestination;
	enabled: string;
	filter?: AwsS3BucketInventoryArgsFilter;
	optional_fields?: string;
	sse_kms?: AwsS3BucketInventoryArgsSseKms;
	sse_s3?: string;

}
