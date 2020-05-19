import { AwsApiGatewayRestApiArgsEndpointConfigurationIntterface, AwsApiGatewayRestApiArgsBodyIntterface } from '.';

export interface AwsApiGatewayRestApiArgsIntterface {
  	name: string;
	description?: string;
	endpoint_configuration?: AwsApiGatewayRestApiArgsEndpointConfigurationIntterface;
	binary_media_types?: string;
	minimum_compression_size?: string;
	body?: AwsApiGatewayRestApiArgsBodyIntterface;
	policy?: string;
	api_key_source?: string;

}
