import { AwsApiGatewayUsagePlanAttrsIntterface } from '../interfaces';


export class AwsApiGatewayUsagePlanAttrs implements AwsApiGatewayUsagePlanAttrsIntterface {
  	id?: string;
	name?: string;
	description?: string;
	api_stages?: string;
	quota_settings?: string;
	throttle_settings?: string;
	product_code?: string;

}
