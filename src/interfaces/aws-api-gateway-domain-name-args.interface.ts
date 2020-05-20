import { AwsApiGatewayDomainNameArgsEndpointConfigurationIntterface } from '.';

export interface AwsApiGatewayDomainNameArgsIntterface {
  domain_name: string;
  endpoint_configuration?: AwsApiGatewayDomainNameArgsEndpointConfigurationIntterface;
  certificate_arn?: string;
  regional_certificate_arn?: string;
  certificate_name?: string;
  certificate_body?: string;
  certificate_chain?: string;
  certificate_private_key?: string;
  regional_certificate_name?: string;

}
