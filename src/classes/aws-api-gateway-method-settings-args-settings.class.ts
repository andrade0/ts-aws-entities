import { AwsApiGatewayMethodSettingsArgsSettingsIntterface } from '../interfaces';


export class AwsApiGatewayMethodSettingsArgsSettings implements AwsApiGatewayMethodSettingsArgsSettingsIntterface {
  	metrics_enabled?: string;
	logging_level?: string;
	data_trace_enabled?: string;
	throttling_burst_limit?: string;
	throttling_rate_limit?: string;
	caching_enabled?: string;
	cache_ttl_in_seconds?: string;
	cache_data_encrypted?: string;
	require_authorization_for_cache_control?: string;
	unauthorized_cache_control_header_strategy?: string;

}
