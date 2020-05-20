import { AwsAppautoscalingScheduledActionIntterface } from '../interfaces';
import { AwsAppautoscalingScheduledActionArgs, AwsAppautoscalingScheduledActionAttrs } from '.';

export class AwsAppautoscalingScheduledAction implements AwsAppautoscalingScheduledActionIntterface {
  name: string = 'aws_appautoscaling_scheduled_action';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html';
  groupName: string = 'App Autoscaling Resources';
  args: AwsAppautoscalingScheduledActionArgs;
  attrs: AwsAppautoscalingScheduledActionAttrs;

}
