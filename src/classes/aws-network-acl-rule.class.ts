import { AwsNetworkAclRuleIntterface } from '../interfaces';
import { AwsNetworkAclRuleArgs,  AwsNetworkAclRuleAttrs } from '.';

export class AwsNetworkAclRule implements AwsNetworkAclRuleIntterface {
  	name: string = 'aws_network_acl_rule';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/network_acl_rule.html';
	groupName: string = 'VPC Resources';
	args: AwsNetworkAclRuleArgs;
	attrs: AwsNetworkAclRuleAttrs;

}
