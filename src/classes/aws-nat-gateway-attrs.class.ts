import { AwsNatGatewayAttrsIntterface } from '../interfaces';


export class AwsNatGatewayAttrs implements AwsNatGatewayAttrsIntterface {
  	id?: string;
	allocation_id?: string;
	subnet_id?: string;
	network_interface_id?: string;
	private_ip?: string;
	public_ip?: string;

}
