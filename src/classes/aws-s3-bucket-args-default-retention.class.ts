import { AwsS3BucketArgsDefaultRetentionIntterface } from '../interfaces';


export class AwsS3BucketArgsDefaultRetention implements AwsS3BucketArgsDefaultRetentionIntterface {
  	mode: string;
	days?: string;
	years?: string;

}
