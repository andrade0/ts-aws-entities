import { AwsSecurityhubAccountIntterface } from '../interfaces';
import { AwsSecurityhubAccountArgs,  AwsSecurityhubAccountAttrs } from '.';

export class AwsSecurityhubAccount implements AwsSecurityhubAccountIntterface {
  	name: string = 'aws_securityhub_account';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/securityhub_account.html';
	groupName: string = 'Security Hub Resources';
	args: AwsSecurityhubAccountArgs;
	attrs: AwsSecurityhubAccountAttrs;

}
