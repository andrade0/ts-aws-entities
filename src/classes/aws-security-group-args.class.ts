import { AwsSecurityGroupArgsIntterface } from '../interfaces';
import { AwsSecurityGroupArgsIngress,  AwsSecurityGroupArgsEgress } from '.';

export class AwsSecurityGroupArgs implements AwsSecurityGroupArgsIntterface {
  	name: string;
	name_prefix: string;
	description: string;
	ingress?: AwsSecurityGroupArgsIngress;
	egress: AwsSecurityGroupArgsEgress;
	revoke_rules_on_delete?: string;
	vpc_id: string;
	tags?: string;

}
