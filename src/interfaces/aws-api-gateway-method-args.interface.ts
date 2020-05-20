export interface AwsApiGatewayMethodArgsIntterface {
  rest_api_id: string;
  resource_id: string;
  http_method: string;
  authorization: string;
  authorizer_id?: string;
  authorization_scopes?: string;
  api_key_required?: string;
  request_models?: string;
  request_validator_id?: string;
  request_parameters?: string;
  request_parameters_in_json: string;

}
