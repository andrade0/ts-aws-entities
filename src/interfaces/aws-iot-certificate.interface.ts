import { AwsIotCertificateArgsIntterface, AwsIotCertificateAttrsIntterface } from '.';

export interface AwsIotCertificateIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsIotCertificateArgsIntterface;
  attrs: AwsIotCertificateAttrsIntterface;

}
