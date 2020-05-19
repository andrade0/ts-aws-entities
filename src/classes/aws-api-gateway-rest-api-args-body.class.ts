import { AwsApiGatewayRestApiArgsBodyIntterface } from '../interfaces';


export class AwsApiGatewayRestApiArgsBody implements AwsApiGatewayRestApiArgsBodyIntterface {
  	aws_api_gateway_resource: string;
	aws_api_gateway_method: string;
	aws_api_gateway_method_response: string;
	aws_api_gateway_method_settings: string;
	aws_api_gateway_integration: string;
	aws_api_gateway_integration_response: string;
	aws_api_gateway_gateway_response: string;
	aws_api_gateway_model: string;

}
