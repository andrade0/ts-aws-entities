import { AwsS3BucketNotificationArgsIntterface, AwsS3BucketNotificationAttrsIntterface } from '.';

export interface AwsS3BucketNotificationIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsS3BucketNotificationArgsIntterface;
  attrs: AwsS3BucketNotificationAttrsIntterface;

}
