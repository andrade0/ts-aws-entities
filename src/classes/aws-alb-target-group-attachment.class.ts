import { AwsAlbTargetGroupAttachmentIntterface } from '../interfaces';
import { AwsAlbTargetGroupAttachmentArgs, AwsAlbTargetGroupAttachmentAttrs } from '.';

export class AwsAlbTargetGroupAttachment implements AwsAlbTargetGroupAttachmentIntterface {
  name: string = 'aws_alb_target_group_attachment';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html';
  groupName: string = 'EC2 Resources';
  args: AwsAlbTargetGroupAttachmentArgs;
  attrs: AwsAlbTargetGroupAttachmentAttrs;

}
