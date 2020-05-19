import { AwsVpcPeeringConnectionAccepterArgsIntterface } from '../interfaces';


export class AwsVpcPeeringConnectionAccepterArgs implements AwsVpcPeeringConnectionAccepterArgsIntterface {
  	vpc_peering_connection_id: string;
	auto_accept?: string;
	tags?: string;

}
