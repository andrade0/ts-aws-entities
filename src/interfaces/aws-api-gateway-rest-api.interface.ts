import { AwsApiGatewayRestApiArgsIntterface, AwsApiGatewayRestApiAttrsIntterface } from '.';

export interface AwsApiGatewayRestApiIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsApiGatewayRestApiArgsIntterface;
  attrs: AwsApiGatewayRestApiAttrsIntterface;

}
