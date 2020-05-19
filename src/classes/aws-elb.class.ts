import { AwsElbIntterface } from '../interfaces';
import { AwsElbArgs,  AwsElbAttrs } from '.';

export class AwsElb implements AwsElbIntterface {
  	name: string = 'aws_elb';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/elb.html';
	groupName: string = 'EC2 Resources';
	args: AwsElbArgs;
	attrs: AwsElbAttrs;

}
