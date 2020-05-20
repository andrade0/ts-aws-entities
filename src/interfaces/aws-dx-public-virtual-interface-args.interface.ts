export interface AwsDxPublicVirtualInterfaceArgsIntterface {
  address_family: string;
  bgp_asn: string;
  connection_id: string;
  name: string;
  vlan: string;
  amazon_address?: string;
  bgp_auth_key?: string;
  customer_address?: string;
  route_filter_prefixes: string;
  tags?: string;

}
