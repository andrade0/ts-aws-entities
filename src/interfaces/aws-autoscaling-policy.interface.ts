import { AwsAutoscalingPolicyArgsIntterface, AwsAutoscalingPolicyAttrsIntterface } from '.';

export interface AwsAutoscalingPolicyIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsAutoscalingPolicyArgsIntterface;
	attrs: AwsAutoscalingPolicyAttrsIntterface;

}
