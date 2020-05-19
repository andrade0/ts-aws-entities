import { AwsSecurityGroupIntterface } from '../interfaces';
import { AwsSecurityGroupArgs,  AwsSecurityGroupAttrs } from '.';

export class AwsSecurityGroup implements AwsSecurityGroupIntterface {
  	name: string = 'aws_security_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/security_group.html';
	groupName: string = 'VPC Resources';
	args: AwsSecurityGroupArgs;
	attrs: AwsSecurityGroupAttrs;

}
