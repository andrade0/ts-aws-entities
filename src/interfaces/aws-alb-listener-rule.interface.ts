import { AwsAlbListenerRuleArgsIntterface, AwsAlbListenerRuleAttrsIntterface } from '.';

export interface AwsAlbListenerRuleIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsAlbListenerRuleArgsIntterface;
	attrs: AwsAlbListenerRuleAttrsIntterface;

}
