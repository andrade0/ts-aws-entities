import { AwsSesDomainDkimIntterface } from '../interfaces';
import { AwsSesDomainDkimArgs,  AwsSesDomainDkimAttrs } from '.';

export class AwsSesDomainDkim implements AwsSesDomainDkimIntterface {
  	name: string = 'aws_ses_domain_dkim';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ses_domain_dkim.html';
	groupName: string = 'SES Resources';
	args: AwsSesDomainDkimArgs;
	attrs: AwsSesDomainDkimAttrs;

}
