import { AwsS3BucketIntterface } from '../interfaces';
import { AwsS3BucketArgs, AwsS3BucketAttrs } from '.';

export class AwsS3Bucket implements AwsS3BucketIntterface {
  name: string = 'aws_s3_bucket';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/s3_bucket.html';
  groupName: string = 'S3 Resources';
  args: AwsS3BucketArgs;
  attrs: AwsS3BucketAttrs;

}
