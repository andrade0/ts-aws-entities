import { AwsNetworkAclArgsIntterface } from '../interfaces';
import { AwsNetworkAclArgsIngress } from '.';

export class AwsNetworkAclArgs implements AwsNetworkAclArgsIntterface {
  	vpc_id: string;
	subnet_ids?: string;
	subnet_id: string;
	ingress?: AwsNetworkAclArgsIngress;
	egress?: string;
	tags?: string;

}
