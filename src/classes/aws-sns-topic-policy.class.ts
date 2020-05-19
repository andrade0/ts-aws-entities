import { AwsSnsTopicPolicyIntterface } from '../interfaces';
import { AwsSnsTopicPolicyArgs,  AwsSnsTopicPolicyAttrs } from '.';

export class AwsSnsTopicPolicy implements AwsSnsTopicPolicyIntterface {
  	name: string = 'aws_sns_topic_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/sns_topic_policy.html';
	groupName: string = 'SNS Resources';
	args: AwsSnsTopicPolicyArgs;
	attrs: AwsSnsTopicPolicyAttrs;

}
