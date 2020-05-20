import { AwsAutoscalingScheduleArgsIntterface, AwsAutoscalingScheduleAttrsIntterface } from '.';

export interface AwsAutoscalingScheduleIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAutoscalingScheduleArgsIntterface;
  attrs: AwsAutoscalingScheduleAttrsIntterface;

}
