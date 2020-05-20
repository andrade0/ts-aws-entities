import { AwsAutoscalingGroupArgsIntterface, AwsAutoscalingGroupAttrsIntterface } from '.';

export interface AwsAutoscalingGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsAutoscalingGroupArgsIntterface;
  attrs: AwsAutoscalingGroupAttrsIntterface;

}
