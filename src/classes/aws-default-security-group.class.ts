import { AwsDefaultSecurityGroupIntterface } from '../interfaces';
import { AwsDefaultSecurityGroupArgs,  AwsDefaultSecurityGroupAttrs } from '.';

export class AwsDefaultSecurityGroup implements AwsDefaultSecurityGroupIntterface {
  	name: string = 'aws_default_security_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/default_security_group.html';
	groupName: string = 'VPC Resources';
	args: AwsDefaultSecurityGroupArgs;
	attrs: AwsDefaultSecurityGroupAttrs;

}
