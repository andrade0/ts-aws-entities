import { AwsDefaultNetworkAclAttrsIntterface } from '../interfaces';


export class AwsDefaultNetworkAclAttrs implements AwsDefaultNetworkAclAttrsIntterface {
  	id?: string;
	vpc_id?: string;
	ingress?: string;
	egress?: string;
	subnet_ids?: string;
	owner_id?: string;

}
