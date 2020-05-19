import { AwsApiGatewayMethodSettingsArgsIntterface } from '../interfaces';
import { AwsApiGatewayMethodSettingsArgsSettings } from '.';

export class AwsApiGatewayMethodSettingsArgs implements AwsApiGatewayMethodSettingsArgsIntterface {
  	rest_api_id: string;
	stage_name: string;
	method_path: string;
	settings: AwsApiGatewayMethodSettingsArgsSettings;

}
