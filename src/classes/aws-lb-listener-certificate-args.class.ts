import { AwsLbListenerCertificateArgsIntterface } from '../interfaces';


export class AwsLbListenerCertificateArgs implements AwsLbListenerCertificateArgsIntterface {
  listener_arn: string;
  certificate_arn: string;

}
