import { AwsS3BucketInventoryArgsIntterface, AwsS3BucketInventoryAttrsIntterface } from '.';

export interface AwsS3BucketInventoryIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsS3BucketInventoryArgsIntterface;
  attrs: AwsS3BucketInventoryAttrsIntterface;

}
