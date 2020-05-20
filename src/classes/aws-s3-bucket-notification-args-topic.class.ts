import { AwsS3BucketNotificationArgsTopicIntterface } from '../interfaces';


export class AwsS3BucketNotificationArgsTopic implements AwsS3BucketNotificationArgsTopicIntterface {
  id?: string;
  topic_arn: string;
  events: string;
  filter_prefix?: string;
  filter_suffix?: string;

}
