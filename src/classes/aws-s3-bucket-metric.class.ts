import { AwsS3BucketMetricIntterface } from '../interfaces';
import { AwsS3BucketMetricArgs,  AwsS3BucketMetricAttrs } from '.';

export class AwsS3BucketMetric implements AwsS3BucketMetricIntterface {
  	name: string = 'aws_s3_bucket_metric';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/s3_bucket_metric.html';
	groupName: string = 'S3 Resources';
	args: AwsS3BucketMetricArgs;
	attrs: AwsS3BucketMetricAttrs;

}
