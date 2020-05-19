import { AwsEc2TransitGatewayArgsIntterface } from '../interfaces';


export class AwsEc2TransitGatewayArgs implements AwsEc2TransitGatewayArgsIntterface {
  	amazon_side_asn?: number;
	auto_accept_shared_attachments?: string;
	default_route_table_association?: string;
	default_route_table_propagation?: string;
	description?: string;
	dns_support?: string;
	tags?: string;
	vpn_ecmp_support?: string;
	arn: string;
	association_default_route_table_id: string;
	id: string;
	owner_id: string;
	propagation_default_route_table_id: string;

}
