import { AwsEc2TransitGatewayRouteArgsIntterface } from '../interfaces';


export class AwsEc2TransitGatewayRouteArgs implements AwsEc2TransitGatewayRouteArgsIntterface {
  	destination_cidr_block: string;
	transit_gateway_attachment_id: string;
	transit_gateway_route_table_id: string;
	id: string;

}
