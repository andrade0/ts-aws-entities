import { AwsAutoscalingLifecycleHookArgsIntterface, AwsAutoscalingLifecycleHookAttrsIntterface } from '.';

export interface AwsAutoscalingLifecycleHookIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsAutoscalingLifecycleHookArgsIntterface;
	attrs: AwsAutoscalingLifecycleHookAttrsIntterface;

}
