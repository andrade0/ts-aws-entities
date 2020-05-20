import { AwsAcmCertificateArgsIntterface, AwsAcmCertificateAttrsIntterface } from '.';

export interface AwsAcmCertificateIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAcmCertificateArgsIntterface;
  attrs: AwsAcmCertificateAttrsIntterface;

}
