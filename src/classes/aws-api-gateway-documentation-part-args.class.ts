import { AwsApiGatewayDocumentationPartArgsIntterface } from '../interfaces';


export class AwsApiGatewayDocumentationPartArgs implements AwsApiGatewayDocumentationPartArgsIntterface {
  location: string;
  properties: string;
  rest_api_id: string;
  method?: string;
  name?: string;
  path?: string;
  status_code?: string;
  type: string;
  id: string;

}
