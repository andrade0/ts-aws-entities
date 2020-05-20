import { AwsAutoscalingScheduleIntterface } from '../interfaces';
import { AwsAutoscalingScheduleArgs, AwsAutoscalingScheduleAttrs } from '.';

export class AwsAutoscalingSchedule implements AwsAutoscalingScheduleIntterface {
  name: string = 'aws_autoscaling_schedule';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html';
  groupName: string = 'EC2 Resources';
  args: AwsAutoscalingScheduleArgs;
  attrs: AwsAutoscalingScheduleAttrs;

}
