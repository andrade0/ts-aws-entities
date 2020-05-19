import { AwsRoute53DelegationSetIntterface } from '../interfaces';
import { AwsRoute53DelegationSetArgs,  AwsRoute53DelegationSetAttrs } from '.';

export class AwsRoute53DelegationSet implements AwsRoute53DelegationSetIntterface {
  	name: string = 'aws_route53_delegation_set';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/route53_delegation_set.html';
	groupName: string = 'Route53 Resources';
	args: AwsRoute53DelegationSetArgs;
	attrs: AwsRoute53DelegationSetAttrs;

}
