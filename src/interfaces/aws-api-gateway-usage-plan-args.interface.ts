import { AwsApiGatewayUsagePlanArgsApiStagesIntterface, AwsApiGatewayUsagePlanArgsQuotaSettingsIntterface } from '.';

export interface AwsApiGatewayUsagePlanArgsIntterface {
  name: string;
  description?: string;
  api_stages?: AwsApiGatewayUsagePlanArgsApiStagesIntterface;
  quota_settings?: AwsApiGatewayUsagePlanArgsQuotaSettingsIntterface;
  throttle_settings?: string;
  product_code?: string;
  burst_limit?: string;
  rate_limit?: string;

}
