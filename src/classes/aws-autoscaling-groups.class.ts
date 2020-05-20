import { AwsAutoscalingGroupsIntterface } from '../interfaces';
import { AwsAutoscalingGroupsArgs, AwsAutoscalingGroupsAttrs } from '.';

export class AwsAutoscalingGroups implements AwsAutoscalingGroupsIntterface {
  name: string = 'aws_autoscaling_groups';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html';
  groupName: string = 'Data Sources';
  args: AwsAutoscalingGroupsArgs;
  attrs: AwsAutoscalingGroupsAttrs;

}
