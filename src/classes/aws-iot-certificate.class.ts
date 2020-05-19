import { AwsIotCertificateIntterface } from '../interfaces';
import { AwsIotCertificateArgs,  AwsIotCertificateAttrs } from '.';

export class AwsIotCertificate implements AwsIotCertificateIntterface {
  	name: string = 'aws_iot_certificate';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iot_certificate.html';
	groupName: string = 'IoT Resources';
	args: AwsIotCertificateArgs;
	attrs: AwsIotCertificateAttrs;

}
