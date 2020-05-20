import { AwsEc2TransitGatewayRouteTableArgsIntterface } from '../interfaces';


export class AwsEc2TransitGatewayRouteTableArgs implements AwsEc2TransitGatewayRouteTableArgsIntterface {
  transit_gateway_id: string;
  tags?: string;
  default_association_route_table: boolean;
  default_propagation_route_table: boolean;
  id: string;

}
