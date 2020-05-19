import { AwsWafregionalWebAclAssociationIntterface } from '../interfaces';
import { AwsWafregionalWebAclAssociationArgs,  AwsWafregionalWebAclAssociationAttrs } from '.';

export class AwsWafregionalWebAclAssociation implements AwsWafregionalWebAclAssociationIntterface {
  	name: string = 'aws_wafregional_web_acl_association';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl_association.html';
	groupName: string = 'WAF Regional Resources';
	args: AwsWafregionalWebAclAssociationArgs;
	attrs: AwsWafregionalWebAclAssociationAttrs;

}
