import { AwsVpcPeeringConnectionOptionsArgsIntterface } from '../interfaces';


export class AwsVpcPeeringConnectionOptionsArgs implements AwsVpcPeeringConnectionOptionsArgsIntterface {
  	vpc_peering_connection_id: string;
	accepter?: string;
	requester?: string;
	allow_remote_vpc_dns_resolution?: string;
	allow_classic_link_to_remote_vpc?: string;
	allow_vpc_to_remote_classic_link?: string;

}
