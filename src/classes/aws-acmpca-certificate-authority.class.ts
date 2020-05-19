import { AwsAcmpcaCertificateAuthorityIntterface } from '../interfaces';
import { AwsAcmpcaCertificateAuthorityArgs,  AwsAcmpcaCertificateAuthorityAttrs } from '.';

export class AwsAcmpcaCertificateAuthority implements AwsAcmpcaCertificateAuthorityIntterface {
  	name: string = 'aws_acmpca_certificate_authority';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html';
	groupName: string = 'ACM PCA Resources';
	args: AwsAcmpcaCertificateAuthorityArgs;
	attrs: AwsAcmpcaCertificateAuthorityAttrs;

}
