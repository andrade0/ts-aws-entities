import { AwsApiGatewayStageArgsAccessLogSettingsIntterface } from '.';

export interface AwsApiGatewayStageArgsIntterface {
  	rest_api_id: string;
	stage_name: string;
	deployment_id: string;
	access_log_settings?: AwsApiGatewayStageArgsAccessLogSettingsIntterface;
	cache_cluster_enabled?: string;
	cache_cluster_size?: string;
	client_certificate_id?: string;
	description?: string;
	documentation_version?: string;
	variables?: string;
	tags?: string;
	xray_tracing_enabled?: string;
	id: string;
	invoke_url: string;
	execution_arn: string;

}
