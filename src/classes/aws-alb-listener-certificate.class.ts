import { AwsAlbListenerCertificateIntterface } from '../interfaces';
import { AwsAlbListenerCertificateArgs,  AwsAlbListenerCertificateAttrs } from '.';

export class AwsAlbListenerCertificate implements AwsAlbListenerCertificateIntterface {
  	name: string = 'aws_alb_listener_certificate';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html';
	groupName: string = 'EC2 Resources';
	args: AwsAlbListenerCertificateArgs;
	attrs: AwsAlbListenerCertificateAttrs;

}
