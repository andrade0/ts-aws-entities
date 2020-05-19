import { AwsSnsTopicPolicyArgsIntterface, AwsSnsTopicPolicyAttrsIntterface } from '.';

export interface AwsSnsTopicPolicyIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSnsTopicPolicyArgsIntterface;
	attrs: AwsSnsTopicPolicyAttrsIntterface;

}
