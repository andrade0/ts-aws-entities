import { AwsAcmCertificateValidationIntterface } from '../interfaces';
import { AwsAcmCertificateValidationArgs, AwsAcmCertificateValidationAttrs } from '.';

export class AwsAcmCertificateValidation implements AwsAcmCertificateValidationIntterface {
  name: string = 'aws_acm_certificate_validation';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html';
  groupName: string = 'ACM Resources';
  args: AwsAcmCertificateValidationArgs;
  attrs: AwsAcmCertificateValidationAttrs;

}
