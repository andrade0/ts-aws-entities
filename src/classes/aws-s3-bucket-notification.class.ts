import { AwsS3BucketNotificationIntterface } from '../interfaces';
import { AwsS3BucketNotificationArgs,  AwsS3BucketNotificationAttrs } from '.';

export class AwsS3BucketNotification implements AwsS3BucketNotificationIntterface {
  	name: string = 'aws_s3_bucket_notification';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/s3_bucket_notification.html';
	groupName: string = 'S3 Resources';
	args: AwsS3BucketNotificationArgs;
	attrs: AwsS3BucketNotificationAttrs;

}
