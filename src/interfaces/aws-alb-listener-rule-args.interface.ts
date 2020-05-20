import {
  AwsAlbListenerRuleArgsActionIntterface,
  AwsAlbListenerRuleArgsConditionIntterface,
  AwsAlbListenerRuleArgsPortIntterface,
} from '.';

export interface AwsAlbListenerRuleArgsIntterface {
  listener_arn: string;
  priority?: string;
  action: AwsAlbListenerRuleArgsActionIntterface;
  condition: AwsAlbListenerRuleArgsConditionIntterface;
  host?: string;
  path?: string;
  port?: AwsAlbListenerRuleArgsPortIntterface;
  protocol?: string;
  query?: string;
  status_code: string;

}
