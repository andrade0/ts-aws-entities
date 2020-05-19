import { AwsAppautoscalingPolicyIntterface } from '../interfaces';
import { AwsAppautoscalingPolicyArgs,  AwsAppautoscalingPolicyAttrs } from '.';

export class AwsAppautoscalingPolicy implements AwsAppautoscalingPolicyIntterface {
  	name: string = 'aws_appautoscaling_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html';
	groupName: string = 'App Autoscaling Resources';
	args: AwsAppautoscalingPolicyArgs;
	attrs: AwsAppautoscalingPolicyAttrs;

}
