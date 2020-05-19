import { AwsApiGatewayClientCertificateIntterface } from '../interfaces';
import { AwsApiGatewayClientCertificateArgs,  AwsApiGatewayClientCertificateAttrs } from '.';

export class AwsApiGatewayClientCertificate implements AwsApiGatewayClientCertificateIntterface {
  	name: string = 'aws_api_gateway_client_certificate';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_client_certificate.html';
	groupName: string = 'API Gateway Resources';
	args: AwsApiGatewayClientCertificateArgs;
	attrs: AwsApiGatewayClientCertificateAttrs;

}
