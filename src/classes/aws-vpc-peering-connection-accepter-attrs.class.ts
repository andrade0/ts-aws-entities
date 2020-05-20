import { AwsVpcPeeringConnectionAccepterAttrsIntterface } from '../interfaces';


export class AwsVpcPeeringConnectionAccepterAttrs implements AwsVpcPeeringConnectionAccepterAttrsIntterface {
  id?: string;
  accept_status?: string;
  vpc_id?: string;
  peer_vpc_id?: string;
  peer_owner_id?: string;
  peer_region?: string;
  accepter?: string;
  requester?: string;

}
