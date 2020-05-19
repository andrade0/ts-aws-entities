import { AwsCanonicalUserIdIntterface } from '../interfaces';
import { AwsCanonicalUserIdArgs,  AwsCanonicalUserIdAttrs } from '.';

export class AwsCanonicalUserId implements AwsCanonicalUserIdIntterface {
  	name: string = 'aws_canonical_user_id';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/canonical_user_id.html';
	groupName: string = 'Data Sources';
	args: AwsCanonicalUserIdArgs;
	attrs: AwsCanonicalUserIdAttrs;

}
