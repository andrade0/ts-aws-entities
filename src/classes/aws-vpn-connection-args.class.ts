import { AwsVpnConnectionArgsIntterface } from '../interfaces';


export class AwsVpnConnectionArgs implements AwsVpnConnectionArgsIntterface {
  	customer_gateway_id: string;
	type: string;
	transit_gateway_id?: string;
	vpn_gateway_id?: string;
	static_routes_only: string;
	tags?: string;
	tunnel1_inside_cidr?: string;
	tunnel2_inside_cidr?: string;
	tunnel1_preshared_key?: string;
	tunnel2_preshared_key?: string;
	id: string;
	customer_gateway_configuration: string;
	tunnel1_address: string;
	tunnel1_cgw_inside_address: string;
	tunnel1_vgw_inside_address: string;
	tunnel1_bgp_asn: string;
	tunnel1_bgp_holdtime: string;
	tunnel2_address: string;
	tunnel2_cgw_inside_address: string;
	tunnel2_vgw_inside_address: string;
	tunnel2_bgp_asn: string;
	tunnel2_bgp_holdtime: string;

}
