import { AwsLbListenerRuleIntterface } from '../interfaces';
import { AwsLbListenerRuleArgs,  AwsLbListenerRuleAttrs } from '.';

export class AwsLbListenerRule implements AwsLbListenerRuleIntterface {
  	name: string = 'aws_lb_listener_rule';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html';
	groupName: string = 'Load Balancing Resources';
	args: AwsLbListenerRuleArgs;
	attrs: AwsLbListenerRuleAttrs;

}
