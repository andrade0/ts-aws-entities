import { AwsEc2TransitGatewayVpcAttachmentArgsIntterface } from '../interfaces';


export class AwsEc2TransitGatewayVpcAttachmentArgs implements AwsEc2TransitGatewayVpcAttachmentArgsIntterface {
  subnet_ids: string;
  transit_gateway_id: string;
  vpc_id: string;
  dns_support?: string;
  ipv6_support?: string;
  tags?: string;
  transit_gateway_default_route_table_association?: boolean;
  transit_gateway_default_route_table_propagation?: boolean;
  id: string;
  vpc_owner_id: string;

}
