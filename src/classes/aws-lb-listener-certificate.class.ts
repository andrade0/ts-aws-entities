import { AwsLbListenerCertificateIntterface } from '../interfaces';
import { AwsLbListenerCertificateArgs, AwsLbListenerCertificateAttrs } from '.';

export class AwsLbListenerCertificate implements AwsLbListenerCertificateIntterface {
  name: string = 'aws_lb_listener_certificate';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html';
  groupName: string = 'Load Balancing Resources';
  args: AwsLbListenerCertificateArgs;
  attrs: AwsLbListenerCertificateAttrs;

}
