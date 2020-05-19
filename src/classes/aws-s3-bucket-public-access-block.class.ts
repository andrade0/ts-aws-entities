import { AwsS3BucketPublicAccessBlockIntterface } from '../interfaces';
import { AwsS3BucketPublicAccessBlockArgs,  AwsS3BucketPublicAccessBlockAttrs } from '.';

export class AwsS3BucketPublicAccessBlock implements AwsS3BucketPublicAccessBlockIntterface {
  	name: string = 'aws_s3_bucket_public_access_block';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/s3_bucket_public_access_block.html';
	groupName: string = 'S3 Resources';
	args: AwsS3BucketPublicAccessBlockArgs;
	attrs: AwsS3BucketPublicAccessBlockAttrs;

}
