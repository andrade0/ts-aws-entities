import { AwsElbAttachmentArgsIntterface, AwsElbAttachmentAttrsIntterface } from '.';

export interface AwsElbAttachmentIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsElbAttachmentArgsIntterface;
	attrs: AwsElbAttachmentAttrsIntterface;

}
