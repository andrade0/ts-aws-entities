import { AwsLbTargetGroupAttachmentIntterface } from '../interfaces';
import { AwsLbTargetGroupAttachmentArgs,  AwsLbTargetGroupAttachmentAttrs } from '.';

export class AwsLbTargetGroupAttachment implements AwsLbTargetGroupAttachmentIntterface {
  	name: string = 'aws_lb_target_group_attachment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html';
	groupName: string = 'Load Balancing Resources';
	args: AwsLbTargetGroupAttachmentArgs;
	attrs: AwsLbTargetGroupAttachmentAttrs;

}
