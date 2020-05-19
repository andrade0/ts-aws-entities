import { AwsApiGatewayIntegrationResponseArgsIntterface } from '../interfaces';


export class AwsApiGatewayIntegrationResponseArgs implements AwsApiGatewayIntegrationResponseArgsIntterface {
  	rest_api_id: string;
	resource_id: string;
	http_method: string;
	status_code: string;
	selection_pattern?: string;
	response_templates?: string;
	response_parameters?: string;
	response_parameters_in_json: string;
	content_handling?: string;

}
