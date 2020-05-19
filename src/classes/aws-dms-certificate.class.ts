import { AwsDmsCertificateIntterface } from '../interfaces';
import { AwsDmsCertificateArgs,  AwsDmsCertificateAttrs } from '.';

export class AwsDmsCertificate implements AwsDmsCertificateIntterface {
  	name: string = 'aws_dms_certificate';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/dms_certificate.html';
	groupName: string = 'Database Migration Service';
	args: AwsDmsCertificateArgs;
	attrs: AwsDmsCertificateAttrs;

}
