import { AwsApiGatewayApiKeyArgsStageKeyIntterface } from '.';

export interface AwsApiGatewayApiKeyArgsIntterface {
  	name: string;
	description?: string;
	enabled?: string;
	value?: string;
	stage_key?: AwsApiGatewayApiKeyArgsStageKeyIntterface;
	id: string;
	created_date: string;
	last_updated_date: string;

}
