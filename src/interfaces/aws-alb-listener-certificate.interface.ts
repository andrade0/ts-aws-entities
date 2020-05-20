import { AwsAlbListenerCertificateArgsIntterface, AwsAlbListenerCertificateAttrsIntterface } from '.';

export interface AwsAlbListenerCertificateIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAlbListenerCertificateArgsIntterface;
  attrs: AwsAlbListenerCertificateAttrsIntterface;

}
