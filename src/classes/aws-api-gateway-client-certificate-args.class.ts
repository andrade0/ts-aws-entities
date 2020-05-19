import { AwsApiGatewayClientCertificateArgsIntterface } from '../interfaces';


export class AwsApiGatewayClientCertificateArgs implements AwsApiGatewayClientCertificateArgsIntterface {
  	description?: string;
	id: string;
	created_date: string;
	expiration_date: string;
	pem_encoded_certificate: string;

}
