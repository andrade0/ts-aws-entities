import { AwsCloudwatchEventRuleArgsIntterface, AwsCloudwatchEventRuleAttrsIntterface } from '.';

export interface AwsCloudwatchEventRuleIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCloudwatchEventRuleArgsIntterface;
	attrs: AwsCloudwatchEventRuleAttrsIntterface;

}
