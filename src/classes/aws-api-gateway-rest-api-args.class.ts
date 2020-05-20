import { AwsApiGatewayRestApiArgsIntterface } from '../interfaces';
import { AwsApiGatewayRestApiArgsBody, AwsApiGatewayRestApiArgsEndpointConfiguration } from '.';

export class AwsApiGatewayRestApiArgs implements AwsApiGatewayRestApiArgsIntterface {
  name: string;
  description?: string;
  endpoint_configuration?: AwsApiGatewayRestApiArgsEndpointConfiguration;
  binary_media_types?: string;
  minimum_compression_size?: string;
  body?: AwsApiGatewayRestApiArgsBody;
  policy?: string;
  api_key_source?: string;

}
