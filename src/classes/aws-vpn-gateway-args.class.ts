import { AwsVpnGatewayArgsIntterface } from '../interfaces';


export class AwsVpnGatewayArgs implements AwsVpnGatewayArgsIntterface {
  vpc_id?: string;
  availability_zone?: string;
  tags?: string;
  amazon_side_asn?: number;

}
