import { AwsApiGatewayDomainNameIntterface } from '../interfaces';
import { AwsApiGatewayDomainNameArgs,  AwsApiGatewayDomainNameAttrs } from '.';

export class AwsApiGatewayDomainName implements AwsApiGatewayDomainNameIntterface {
  	name: string = 'aws_api_gateway_domain_name';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html';
	groupName: string = 'API Gateway Resources';
	args: AwsApiGatewayDomainNameArgs;
	attrs: AwsApiGatewayDomainNameAttrs;

}
