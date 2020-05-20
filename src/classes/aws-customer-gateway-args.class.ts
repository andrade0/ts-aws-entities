import { AwsCustomerGatewayArgsIntterface } from '../interfaces';


export class AwsCustomerGatewayArgs implements AwsCustomerGatewayArgsIntterface {
  bgp_asn: number;
  ip_address: string;
  type: string;
  tags?: string;
  id: string;

}
