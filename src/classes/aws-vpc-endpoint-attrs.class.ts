import { AwsVpcEndpointAttrsIntterface } from '../interfaces';


export class AwsVpcEndpointAttrs implements AwsVpcEndpointAttrsIntterface {
  	id?: string;
	state?: string;
	prefix_list_id?: string;
	cidr_blocks?: string;
	network_interface_ids?: string;
	dns_entry?: string;

}
