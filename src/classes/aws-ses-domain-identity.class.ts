import { AwsSesDomainIdentityIntterface } from '../interfaces';
import { AwsSesDomainIdentityArgs,  AwsSesDomainIdentityAttrs } from '.';

export class AwsSesDomainIdentity implements AwsSesDomainIdentityIntterface {
  	name: string = 'aws_ses_domain_identity';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ses_domain_identity.html';
	groupName: string = 'SES Resources';
	args: AwsSesDomainIdentityArgs;
	attrs: AwsSesDomainIdentityAttrs;

}
