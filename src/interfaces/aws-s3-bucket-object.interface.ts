import { AwsS3BucketObjectArgsIntterface, AwsS3BucketObjectAttrsIntterface } from '.';

export interface AwsS3BucketObjectIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsS3BucketObjectArgsIntterface;
	attrs: AwsS3BucketObjectAttrsIntterface;

}
