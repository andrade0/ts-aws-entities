import { AwsLbTargetGroupAttachmentArgsIntterface, AwsLbTargetGroupAttachmentAttrsIntterface } from '.';

export interface AwsLbTargetGroupAttachmentIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsLbTargetGroupAttachmentArgsIntterface;
	attrs: AwsLbTargetGroupAttachmentAttrsIntterface;

}
