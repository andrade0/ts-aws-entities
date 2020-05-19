import { AwsWafWebAclIntterface } from '../interfaces';
import { AwsWafWebAclArgs,  AwsWafWebAclAttrs } from '.';

export class AwsWafWebAcl implements AwsWafWebAclIntterface {
  	name: string = 'aws_waf_web_acl';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/waf_web_acl.html';
	groupName: string = 'WAF Resources';
	args: AwsWafWebAclArgs;
	attrs: AwsWafWebAclAttrs;

}
