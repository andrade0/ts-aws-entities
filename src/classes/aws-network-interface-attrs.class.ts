import { AwsNetworkInterfaceAttrsIntterface } from '../interfaces';


export class AwsNetworkInterfaceAttrs implements AwsNetworkInterfaceAttrsIntterface {
  	id?: string;
	subnet_id?: string;
	description?: string;
	private_ips?: string;
	security_groups?: string;
	attachment?: string;
	source_dest_check?: string;
	tags?: string;

}
