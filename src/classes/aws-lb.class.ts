import { AwsLbIntterface } from '../interfaces';
import { AwsLbArgs,  AwsLbAttrs } from '.';

export class AwsLb implements AwsLbIntterface {
  	name: string = 'aws_lb';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lb.html';
	groupName: string = 'Load Balancing Resources';
	args: AwsLbArgs;
	attrs: AwsLbAttrs;

}
