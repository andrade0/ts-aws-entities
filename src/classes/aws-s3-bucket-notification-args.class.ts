import { AwsS3BucketNotificationArgsIntterface } from '../interfaces';
import { AwsS3BucketNotificationArgsTopic,  AwsS3BucketNotificationArgsQueue,  AwsS3BucketNotificationArgsLambdaFunction } from '.';

export class AwsS3BucketNotificationArgs implements AwsS3BucketNotificationArgsIntterface {
  	bucket: string;
	topic?: AwsS3BucketNotificationArgsTopic;
	queue?: AwsS3BucketNotificationArgsQueue;
	lambda_function: AwsS3BucketNotificationArgsLambdaFunction;

}
