import { AwsDxPrivateVirtualInterfaceArgsIntterface } from '../interfaces';


export class AwsDxPrivateVirtualInterfaceArgs implements AwsDxPrivateVirtualInterfaceArgsIntterface {
  	address_family: string;
	bgp_asn: string;
	connection_id: string;
	name: string;
	vlan: string;
	amazon_address?: string;
	mtu?: string;
	bgp_auth_key?: string;
	customer_address?: string;
	dx_gateway_id?: string;
	tags?: string;
	vpn_gateway_id?: string;

}
