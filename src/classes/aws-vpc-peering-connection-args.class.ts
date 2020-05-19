import { AwsVpcPeeringConnectionArgsIntterface } from '../interfaces';


export class AwsVpcPeeringConnectionArgs implements AwsVpcPeeringConnectionArgsIntterface {
  	peer_owner_id?: string;
	peer_vpc_id: string;
	vpc_id: string;
	auto_accept?: string;
	peer_region?: string;
	accepter?: string;
	requester?: string;
	tags?: string;
	allow_remote_vpc_dns_resolution?: string;
	allow_classic_link_to_remote_vpc?: string;
	allow_vpc_to_remote_classic_link?: string;
	create: string;
	update: string;
	delete: string;

}
