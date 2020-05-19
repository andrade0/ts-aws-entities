import { AwsS3AccountPublicAccessBlockArgsIntterface } from '../interfaces';


export class AwsS3AccountPublicAccessBlockArgs implements AwsS3AccountPublicAccessBlockArgsIntterface {
  	account_id?: string;
	block_public_acls?: string;
	block_public_policy?: string;
	ignore_public_acls?: string;
	restrict_public_buckets?: string;
	id: string;

}
