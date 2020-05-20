import { AwsAcmCertificateArgsPrivateKeyIntterface } from '../interfaces';


export class AwsAcmCertificateArgsPrivateKey implements AwsAcmCertificateArgsPrivateKeyIntterface {
  private_key: string;
  certificate_body: string;
  certificate_chain?: string;

}
