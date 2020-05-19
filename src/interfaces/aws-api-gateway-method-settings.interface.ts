import { AwsApiGatewayMethodSettingsArgsIntterface, AwsApiGatewayMethodSettingsAttrsIntterface } from '.';

export interface AwsApiGatewayMethodSettingsIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsApiGatewayMethodSettingsArgsIntterface;
	attrs: AwsApiGatewayMethodSettingsAttrsIntterface;

}
