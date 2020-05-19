import { AwsLbListenerRuleArgsIntterface } from '../interfaces';
import { AwsLbListenerRuleArgsAction,  AwsLbListenerRuleArgsCondition,  AwsLbListenerRuleArgsPort } from '.';

export class AwsLbListenerRuleArgs implements AwsLbListenerRuleArgsIntterface {
  	listener_arn: string;
	priority?: string;
	action: AwsLbListenerRuleArgsAction;
	condition: AwsLbListenerRuleArgsCondition;
	host?: string;
	path?: string;
	port?: AwsLbListenerRuleArgsPort;
	protocol?: string;
	query?: string;
	status_code: string;

}
