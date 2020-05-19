import { AwsCallerIdentityIntterface } from '../interfaces';
import { AwsCallerIdentityArgs,  AwsCallerIdentityAttrs } from '.';

export class AwsCallerIdentity implements AwsCallerIdentityIntterface {
  	name: string = 'aws_caller_identity';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/caller_identity.html';
	groupName: string = 'Data Sources';
	args: AwsCallerIdentityArgs;
	attrs: AwsCallerIdentityAttrs;

}
