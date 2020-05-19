import { AwsNetworkInterfaceArgsIntterface } from '../interfaces';
import { AwsNetworkInterfaceArgsAttachment } from '.';

export class AwsNetworkInterfaceArgs implements AwsNetworkInterfaceArgsIntterface {
  	subnet_id: string;
	description?: string;
	private_ips?: string;
	private_ips_count?: number;
	security_groups?: string;
	attachment?: AwsNetworkInterfaceArgsAttachment;
	source_dest_check?: string;
	tags?: string;

}
