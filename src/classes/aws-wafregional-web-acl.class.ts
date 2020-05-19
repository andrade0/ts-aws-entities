import { AwsWafregionalWebAclIntterface } from '../interfaces';
import { AwsWafregionalWebAclArgs,  AwsWafregionalWebAclAttrs } from '.';

export class AwsWafregionalWebAcl implements AwsWafregionalWebAclIntterface {
  	name: string = 'aws_wafregional_web_acl';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html';
	groupName: string = 'WAF Regional Resources';
	args: AwsWafregionalWebAclArgs;
	attrs: AwsWafregionalWebAclAttrs;

}
