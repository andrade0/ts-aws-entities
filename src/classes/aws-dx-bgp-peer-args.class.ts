import { AwsDxBgpPeerArgsIntterface } from '../interfaces';


export class AwsDxBgpPeerArgs implements AwsDxBgpPeerArgsIntterface {
  address_family: string;
  bgp_asn: string;
  virtual_interface_id: string;
  amazon_address?: string;
  bgp_auth_key?: string;
  customer_address?: string;

}
