import { AwsApiGatewayMethodSettingsArgsSettingsIntterface } from '.';

export interface AwsApiGatewayMethodSettingsArgsIntterface {
  rest_api_id: string;
  stage_name: string;
  method_path: string;
  settings: AwsApiGatewayMethodSettingsArgsSettingsIntterface;

}
