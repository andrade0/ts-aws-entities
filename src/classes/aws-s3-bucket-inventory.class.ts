import { AwsS3BucketInventoryIntterface } from '../interfaces';
import { AwsS3BucketInventoryArgs, AwsS3BucketInventoryAttrs } from '.';

export class AwsS3BucketInventory implements AwsS3BucketInventoryIntterface {
  name: string = 'aws_s3_bucket_inventory';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html';
  groupName: string = 'S3 Resources';
  args: AwsS3BucketInventoryArgs;
  attrs: AwsS3BucketInventoryAttrs;

}
