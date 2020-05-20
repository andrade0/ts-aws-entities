import { AwsAutoscalingGroupIntterface } from '../interfaces';
import { AwsAutoscalingGroupArgs, AwsAutoscalingGroupAttrs } from '.';

export class AwsAutoscalingGroup implements AwsAutoscalingGroupIntterface {
  name: string = 'aws_autoscaling_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html';
  groupName: string = 'EC2 Resources';
  args: AwsAutoscalingGroupArgs;
  attrs: AwsAutoscalingGroupAttrs;

}
