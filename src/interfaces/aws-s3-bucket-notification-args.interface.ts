import {
  AwsS3BucketNotificationArgsLambdaFunctionIntterface,
  AwsS3BucketNotificationArgsQueueIntterface,
  AwsS3BucketNotificationArgsTopicIntterface,
} from '.';

export interface AwsS3BucketNotificationArgsIntterface {
  bucket: string;
  topic?: AwsS3BucketNotificationArgsTopicIntterface;
  queue?: AwsS3BucketNotificationArgsQueueIntterface;
  lambda_function: AwsS3BucketNotificationArgsLambdaFunctionIntterface;

}
