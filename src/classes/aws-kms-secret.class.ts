import { AwsKmsSecretIntterface } from '../interfaces';
import { AwsKmsSecretArgs,  AwsKmsSecretAttrs } from '.';

export class AwsKmsSecret implements AwsKmsSecretIntterface {
  	name: string = 'aws_kms_secret';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/kms_secret.html';
	groupName: string = 'Data Sources';
	args: AwsKmsSecretArgs;
	attrs: AwsKmsSecretAttrs;

}
