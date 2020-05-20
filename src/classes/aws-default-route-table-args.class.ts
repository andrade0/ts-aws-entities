import { AwsDefaultRouteTableArgsIntterface } from '../interfaces';


export class AwsDefaultRouteTableArgs implements AwsDefaultRouteTableArgsIntterface {
  default_route_table_id: string;
  route?: string;
  tags?: string;
  propagating_vgws?: string;
  cidr_block: string;
  ipv6_cidr_block: string;
  egress_only_gateway_id?: string;
  gateway_id?: string;
  instance_id?: string;
  nat_gateway_id?: string;
  network_interface_id?: string;
  transit_gateway_id?: string;
  vpc_peering_connection_id?: string;

}
