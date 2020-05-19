import { AwsSesDomainMailFromIntterface } from '../interfaces';
import { AwsSesDomainMailFromArgs,  AwsSesDomainMailFromAttrs } from '.';

export class AwsSesDomainMailFrom implements AwsSesDomainMailFromIntterface {
  	name: string = 'aws_ses_domain_mail_from';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ses_domain_mail_from.html';
	groupName: string = 'SES Resources';
	args: AwsSesDomainMailFromArgs;
	attrs: AwsSesDomainMailFromAttrs;

}
