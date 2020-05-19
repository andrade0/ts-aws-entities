import { AwsAcmCertificateAttrsIntterface } from '../interfaces';


export class AwsAcmCertificateAttrs implements AwsAcmCertificateAttrsIntterface {
  	id?: string;
	arn?: string;
	domain_name?: string;
	domain_validation_options?: string;
	validation_emails?: string;

}
