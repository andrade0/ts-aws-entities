import { AwsLbTargetGroupIntterface } from '../interfaces';
import { AwsLbTargetGroupArgs, AwsLbTargetGroupAttrs } from '.';

export class AwsLbTargetGroup implements AwsLbTargetGroupIntterface {
  name: string = 'aws_lb_target_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/lb_target_group.html';
  groupName: string = 'Load Balancing Resources';
  args: AwsLbTargetGroupArgs;
  attrs: AwsLbTargetGroupAttrs;

}
