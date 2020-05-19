import { AwsApiGatewayUsagePlanArgsIntterface } from '../interfaces';
import { AwsApiGatewayUsagePlanArgsApiStages,  AwsApiGatewayUsagePlanArgsQuotaSettings } from '.';

export class AwsApiGatewayUsagePlanArgs implements AwsApiGatewayUsagePlanArgsIntterface {
  	name: string;
	description?: string;
	api_stages?: AwsApiGatewayUsagePlanArgsApiStages;
	quota_settings?: AwsApiGatewayUsagePlanArgsQuotaSettings;
	throttle_settings?: string;
	product_code?: string;
	burst_limit?: string;
	rate_limit?: string;

}
