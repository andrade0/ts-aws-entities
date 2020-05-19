import { AwsApiGatewayDomainNameArgsIntterface } from '../interfaces';
import { AwsApiGatewayDomainNameArgsEndpointConfiguration } from '.';

export class AwsApiGatewayDomainNameArgs implements AwsApiGatewayDomainNameArgsIntterface {
  	domain_name: string;
	endpoint_configuration?: AwsApiGatewayDomainNameArgsEndpointConfiguration;
	certificate_arn?: string;
	regional_certificate_arn?: string;
	certificate_name?: string;
	certificate_body?: string;
	certificate_chain?: string;
	certificate_private_key?: string;
	regional_certificate_name?: string;

}
