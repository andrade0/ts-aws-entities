import { AwsIamServerCertificateIntterface } from '../interfaces';
import { AwsIamServerCertificateArgs,  AwsIamServerCertificateAttrs } from '.';

export class AwsIamServerCertificate implements AwsIamServerCertificateIntterface {
  	name: string = 'aws_iam_server_certificate';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_server_certificate.html';
	groupName: string = 'IAM Resources';
	args: AwsIamServerCertificateArgs;
	attrs: AwsIamServerCertificateAttrs;

}
