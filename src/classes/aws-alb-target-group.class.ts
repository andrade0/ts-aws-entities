import { AwsAlbTargetGroupIntterface } from '../interfaces';
import { AwsAlbTargetGroupArgs, AwsAlbTargetGroupAttrs } from '.';

export class AwsAlbTargetGroup implements AwsAlbTargetGroupIntterface {
  name: string = 'aws_alb_target_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/lb_target_group.html';
  groupName: string = 'EC2 Resources';
  args: AwsAlbTargetGroupArgs;
  attrs: AwsAlbTargetGroupAttrs;

}
