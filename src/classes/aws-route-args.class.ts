import { AwsRouteArgsIntterface } from '../interfaces';


export class AwsRouteArgs implements AwsRouteArgsIntterface {
  route_table_id: string;
  destination_cidr_block?: string;
  destination_ipv6_cidr_block?: string;
  egress_only_gateway_id?: string;
  gateway_id?: string;
  instance_id?: string;
  nat_gateway_id?: string;
  network_interface_id?: string;
  transit_gateway_id?: string;
  vpc_peering_connection_id?: string;

}
