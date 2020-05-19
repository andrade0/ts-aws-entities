import { AwsCloudwatchEventRuleIntterface } from '../interfaces';
import { AwsCloudwatchEventRuleArgs,  AwsCloudwatchEventRuleAttrs } from '.';

export class AwsCloudwatchEventRule implements AwsCloudwatchEventRuleIntterface {
  	name: string = 'aws_cloudwatch_event_rule';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html';
	groupName: string = 'CloudWatch Resources';
	args: AwsCloudwatchEventRuleArgs;
	attrs: AwsCloudwatchEventRuleAttrs;

}
