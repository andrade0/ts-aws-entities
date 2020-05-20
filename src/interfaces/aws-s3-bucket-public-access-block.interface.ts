import { AwsS3BucketPublicAccessBlockArgsIntterface, AwsS3BucketPublicAccessBlockAttrsIntterface } from '.';

export interface AwsS3BucketPublicAccessBlockIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsS3BucketPublicAccessBlockArgsIntterface;
  attrs: AwsS3BucketPublicAccessBlockAttrsIntterface;

}
