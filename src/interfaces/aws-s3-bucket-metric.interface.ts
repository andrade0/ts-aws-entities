import { AwsS3BucketMetricArgsIntterface, AwsS3BucketMetricAttrsIntterface } from '.';

export interface AwsS3BucketMetricIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsS3BucketMetricArgsIntterface;
  attrs: AwsS3BucketMetricAttrsIntterface;

}
