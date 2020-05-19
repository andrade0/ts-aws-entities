import { AwsS3BucketPolicyArgsIntterface, AwsS3BucketPolicyAttrsIntterface } from '.';

export interface AwsS3BucketPolicyIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsS3BucketPolicyArgsIntterface;
	attrs: AwsS3BucketPolicyAttrsIntterface;

}
