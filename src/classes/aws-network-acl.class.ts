import { AwsNetworkAclIntterface } from '../interfaces';
import { AwsNetworkAclArgs,  AwsNetworkAclAttrs } from '.';

export class AwsNetworkAcl implements AwsNetworkAclIntterface {
  	name: string = 'aws_network_acl';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/network_acl.html';
	groupName: string = 'VPC Resources';
	args: AwsNetworkAclArgs;
	attrs: AwsNetworkAclAttrs;

}
