import { AwsApiGatewayIntegrationArgsIntterface } from '../interfaces';


export class AwsApiGatewayIntegrationArgs implements AwsApiGatewayIntegrationArgsIntterface {
  rest_api_id: string;
  resource_id: string;
  http_method: string;
  integration_http_method?: string;
  type: string;
  connection_type?: string;
  connection_id?: string;
  uri?: string;
  credentials?: string;
  request_templates?: string;
  request_parameters?: string;
  passthrough_behavior?: string;
  cache_key_parameters?: string;
  cache_namespace?: string;
  request_parameters_in_json: string;
  content_handling?: string;
  timeout_milliseconds?: string;

}
