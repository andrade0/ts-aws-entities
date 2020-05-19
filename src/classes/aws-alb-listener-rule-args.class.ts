import { AwsAlbListenerRuleArgsIntterface } from '../interfaces';
import { AwsAlbListenerRuleArgsAction,  AwsAlbListenerRuleArgsCondition,  AwsAlbListenerRuleArgsPort } from '.';

export class AwsAlbListenerRuleArgs implements AwsAlbListenerRuleArgsIntterface {
  	listener_arn: string;
	priority?: string;
	action: AwsAlbListenerRuleArgsAction;
	condition: AwsAlbListenerRuleArgsCondition;
	host?: string;
	path?: string;
	port?: AwsAlbListenerRuleArgsPort;
	protocol?: string;
	query?: string;
	status_code: string;

}
