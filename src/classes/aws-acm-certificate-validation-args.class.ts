import { AwsAcmCertificateValidationArgsIntterface } from '../interfaces';


export class AwsAcmCertificateValidationArgs implements AwsAcmCertificateValidationArgsIntterface {
  	certificate_arn: string;
	validation_record_fqdns?: string;
	create: string;

}
