import { AwsEc2TransitGatewayRouteArgsIntterface, AwsEc2TransitGatewayRouteAttrsIntterface } from '.';

export interface AwsEc2TransitGatewayRouteIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEc2TransitGatewayRouteArgsIntterface;
  attrs: AwsEc2TransitGatewayRouteAttrsIntterface;

}
