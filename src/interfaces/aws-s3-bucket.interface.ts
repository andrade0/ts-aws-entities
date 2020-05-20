import { AwsS3BucketArgsIntterface, AwsS3BucketAttrsIntterface } from '.';

export interface AwsS3BucketIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsS3BucketArgsIntterface;
  attrs: AwsS3BucketAttrsIntterface;

}
