import { AwsAlbListenerRuleIntterface } from '../interfaces';
import { AwsAlbListenerRuleArgs, AwsAlbListenerRuleAttrs } from '.';

export class AwsAlbListenerRule implements AwsAlbListenerRuleIntterface {
  name: string = 'aws_alb_listener_rule';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html';
  groupName: string = 'EC2 Resources';
  args: AwsAlbListenerRuleArgs;
  attrs: AwsAlbListenerRuleAttrs;

}
