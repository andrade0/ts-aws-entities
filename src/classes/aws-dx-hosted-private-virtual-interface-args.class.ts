import { AwsDxHostedPrivateVirtualInterfaceArgsIntterface } from '../interfaces';


export class AwsDxHostedPrivateVirtualInterfaceArgs implements AwsDxHostedPrivateVirtualInterfaceArgsIntterface {
  address_family: string;
  bgp_asn: string;
  connection_id: string;
  name: string;
  owner_account_id: string;
  vlan: string;
  amazon_address?: string;
  mtu?: string;
  bgp_auth_key?: string;
  customer_address?: string;

}
