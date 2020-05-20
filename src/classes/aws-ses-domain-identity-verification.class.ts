import { AwsSesDomainIdentityVerificationIntterface } from '../interfaces';
import { AwsSesDomainIdentityVerificationArgs, AwsSesDomainIdentityVerificationAttrs } from '.';

export class AwsSesDomainIdentityVerification implements AwsSesDomainIdentityVerificationIntterface {
  name: string = 'aws_ses_domain_identity_verification';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html';
  groupName: string = 'SES Resources';
  args: AwsSesDomainIdentityVerificationArgs;
  attrs: AwsSesDomainIdentityVerificationAttrs;

}
