import { AwsNetworkAclRuleArgsIntterface } from '../interfaces';


export class AwsNetworkAclRuleArgs implements AwsNetworkAclRuleArgsIntterface {
  	network_acl_id: string;
	rule_number: string;
	egress: string;
	protocol: string;
	rule_action: string;
	cidr_block?: string;
	ipv6_cidr_block?: string;
	from_port?: string;
	to_port?: string;
	icmp_type?: string;
	icmp_code?: string;

}
