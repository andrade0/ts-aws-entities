import { AwsAutoscalingAttachmentIntterface } from '../interfaces';
import { AwsAutoscalingAttachmentArgs,  AwsAutoscalingAttachmentAttrs } from '.';

export class AwsAutoscalingAttachment implements AwsAutoscalingAttachmentIntterface {
  	name: string = 'aws_autoscaling_attachment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html';
	groupName: string = 'EC2 Resources';
	args: AwsAutoscalingAttachmentArgs;
	attrs: AwsAutoscalingAttachmentAttrs;

}
