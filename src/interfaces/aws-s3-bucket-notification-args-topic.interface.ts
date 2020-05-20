export interface AwsS3BucketNotificationArgsTopicIntterface {
  id?: string;
  topic_arn: string;
  events: string;
  filter_prefix?: string;
  filter_suffix?: string;

}
