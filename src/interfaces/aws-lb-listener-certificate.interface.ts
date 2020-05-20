import { AwsLbListenerCertificateArgsIntterface, AwsLbListenerCertificateAttrsIntterface } from '.';

export interface AwsLbListenerCertificateIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsLbListenerCertificateArgsIntterface;
  attrs: AwsLbListenerCertificateAttrsIntterface;

}
