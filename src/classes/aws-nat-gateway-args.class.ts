import { AwsNatGatewayArgsIntterface } from '../interfaces';


export class AwsNatGatewayArgs implements AwsNatGatewayArgsIntterface {
  allocation_id: string;
  subnet_id: string;
  tags?: string;

}
