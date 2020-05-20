import { AwsAcmCertificateIntterface } from '../interfaces';
import { AwsAcmCertificateArgs, AwsAcmCertificateAttrs } from '.';

export class AwsAcmCertificate implements AwsAcmCertificateIntterface {
  name: string = 'aws_acm_certificate';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/acm_certificate.html';
  groupName: string = 'ACM Resources';
  args: AwsAcmCertificateArgs;
  attrs: AwsAcmCertificateAttrs;

}
