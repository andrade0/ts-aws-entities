import { AwsSecurityGroupRuleArgsIntterface } from '../interfaces';


export class AwsSecurityGroupRuleArgs implements AwsSecurityGroupRuleArgsIntterface {
  	type: string;
	cidr_blocks?: string;
	ipv6_cidr_blocks?: string;
	prefix_list_ids?: string;
	from_port: string;
	protocol: string;
	security_group_id: string;
	source_security_group_id?: string;
	self?: string;
	to_port: string;
	description?: string;

}
