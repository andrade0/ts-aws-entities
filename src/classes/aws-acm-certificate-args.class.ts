import { AwsAcmCertificateArgsIntterface } from '../interfaces';
import { AwsAcmCertificateArgsDomainName, AwsAcmCertificateArgsPrivateKey } from '.';

export class AwsAcmCertificateArgs implements AwsAcmCertificateArgsIntterface {
  domain_name?: AwsAcmCertificateArgsDomainName;
  private_key?: AwsAcmCertificateArgsPrivateKey;
  tags?: string;

}
