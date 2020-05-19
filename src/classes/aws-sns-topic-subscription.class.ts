import { AwsSnsTopicSubscriptionIntterface } from '../interfaces';
import { AwsSnsTopicSubscriptionArgs,  AwsSnsTopicSubscriptionAttrs } from '.';

export class AwsSnsTopicSubscription implements AwsSnsTopicSubscriptionIntterface {
  	name: string = 'aws_sns_topic_subscription';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription.html';
	groupName: string = 'SNS Resources';
	args: AwsSnsTopicSubscriptionArgs;
	attrs: AwsSnsTopicSubscriptionAttrs;

}
