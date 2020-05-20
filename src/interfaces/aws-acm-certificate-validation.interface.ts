import { AwsAcmCertificateValidationArgsIntterface, AwsAcmCertificateValidationAttrsIntterface } from '.';

export interface AwsAcmCertificateValidationIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAcmCertificateValidationArgsIntterface;
  attrs: AwsAcmCertificateValidationAttrsIntterface;

}
