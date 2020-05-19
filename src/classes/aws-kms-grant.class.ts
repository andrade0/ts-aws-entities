import { AwsKmsGrantIntterface } from '../interfaces';
import { AwsKmsGrantArgs,  AwsKmsGrantAttrs } from '.';

export class AwsKmsGrant implements AwsKmsGrantIntterface {
  	name: string = 'aws_kms_grant';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/kms_grant.html';
	groupName: string = 'KMS Resources';
	args: AwsKmsGrantArgs;
	attrs: AwsKmsGrantAttrs;

}
