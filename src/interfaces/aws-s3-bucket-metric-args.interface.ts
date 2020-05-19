import { AwsS3BucketMetricArgsFilterIntterface } from '.';

export interface AwsS3BucketMetricArgsIntterface {
  	bucket: string;
	name: string;
	filter?: AwsS3BucketMetricArgsFilterIntterface;

}
