import { AwsAutoscalingLifecycleHookIntterface } from '../interfaces';
import { AwsAutoscalingLifecycleHookArgs, AwsAutoscalingLifecycleHookAttrs } from '.';

export class AwsAutoscalingLifecycleHook implements AwsAutoscalingLifecycleHookIntterface {
  name: string = 'aws_autoscaling_lifecycle_hook';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hooks.html';
  groupName: string = 'EC2 Resources';
  args: AwsAutoscalingLifecycleHookArgs;
  attrs: AwsAutoscalingLifecycleHookAttrs;

}
