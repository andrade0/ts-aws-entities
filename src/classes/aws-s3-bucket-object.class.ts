import { AwsS3BucketObjectIntterface } from '../interfaces';
import { AwsS3BucketObjectArgs, AwsS3BucketObjectAttrs } from '.';

export class AwsS3BucketObject implements AwsS3BucketObjectIntterface {
  name: string = 'aws_s3_bucket_object';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html';
  groupName: string = 'S3 Resources';
  args: AwsS3BucketObjectArgs;
  attrs: AwsS3BucketObjectAttrs;

}
