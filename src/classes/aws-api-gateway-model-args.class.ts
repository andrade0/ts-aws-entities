import { AwsApiGatewayModelArgsIntterface } from '../interfaces';


export class AwsApiGatewayModelArgs implements AwsApiGatewayModelArgsIntterface {
  rest_api_id: string;
  name: string;
  description?: string;
  content_type: string;
  schema: string;

}
