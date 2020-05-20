import { AwsApiGatewayAuthorizerArgsIntterface } from '../interfaces';


export class AwsApiGatewayAuthorizerArgs implements AwsApiGatewayAuthorizerArgsIntterface {
  authorizer_uri: string;
  name: string;
  rest_api_id: string;
  identity_source?: string;
  type?: string;
  authorizer_credentials?: string;
  authorizer_result_ttl_in_seconds?: string;
  identity_validation_expression?: string;
  provider_arns: string;

}
