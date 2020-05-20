import { AwsAppautoscalingTargetIntterface } from '../interfaces';
import { AwsAppautoscalingTargetArgs, AwsAppautoscalingTargetAttrs } from '.';

export class AwsAppautoscalingTarget implements AwsAppautoscalingTargetIntterface {
  name: string = 'aws_appautoscaling_target';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html';
  groupName: string = 'App Autoscaling Resources';
  args: AwsAppautoscalingTargetArgs;
  attrs: AwsAppautoscalingTargetAttrs;

}
