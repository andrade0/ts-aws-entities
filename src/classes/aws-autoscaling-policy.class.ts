import { AwsAutoscalingPolicyIntterface } from '../interfaces';
import { AwsAutoscalingPolicyArgs,  AwsAutoscalingPolicyAttrs } from '.';

export class AwsAutoscalingPolicy implements AwsAutoscalingPolicyIntterface {
  	name: string = 'aws_autoscaling_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html';
	groupName: string = 'EC2 Resources';
	args: AwsAutoscalingPolicyArgs;
	attrs: AwsAutoscalingPolicyAttrs;

}
