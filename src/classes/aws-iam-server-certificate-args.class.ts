import { AwsIamServerCertificateArgsIntterface } from '../interfaces';


export class AwsIamServerCertificateArgs implements AwsIamServerCertificateArgsIntterface {
  	name?: string;
	name_prefix?: string;
	certificate_body: string;
	certificate_chain?: string;
	private_key: string;
	path?: string;

}
