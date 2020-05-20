import { AwsApiGatewayGatewayResponseArgsIntterface } from '../interfaces';


export class AwsApiGatewayGatewayResponseArgs implements AwsApiGatewayGatewayResponseArgsIntterface {
  rest_api_id: string;
  response_type: string;
  status_code?: string;
  response_parameters?: string;
  response_templates?: string;

}
