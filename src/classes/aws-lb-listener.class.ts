import { AwsLbListenerIntterface } from '../interfaces';
import { AwsLbListenerArgs,  AwsLbListenerAttrs } from '.';

export class AwsLbListener implements AwsLbListenerIntterface {
  	name: string = 'aws_lb_listener';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lb_listener.html';
	groupName: string = 'Load Balancing Resources';
	args: AwsLbListenerArgs;
	attrs: AwsLbListenerAttrs;

}
