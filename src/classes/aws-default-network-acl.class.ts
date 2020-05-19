import { AwsDefaultNetworkAclIntterface } from '../interfaces';
import { AwsDefaultNetworkAclArgs,  AwsDefaultNetworkAclAttrs } from '.';

export class AwsDefaultNetworkAcl implements AwsDefaultNetworkAclIntterface {
  	name: string = 'aws_default_network_acl';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/default_network_acl.html';
	groupName: string = 'VPC Resources';
	args: AwsDefaultNetworkAclArgs;
	attrs: AwsDefaultNetworkAclAttrs;

}
