import { AwsS3BucketPolicyIntterface } from '../interfaces';
import { AwsS3BucketPolicyArgs,  AwsS3BucketPolicyAttrs } from '.';

export class AwsS3BucketPolicy implements AwsS3BucketPolicyIntterface {
  	name: string = 'aws_s3_bucket_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/s3_bucket_policy.html';
	groupName: string = 'S3 Resources';
	args: AwsS3BucketPolicyArgs;
	attrs: AwsS3BucketPolicyAttrs;

}
