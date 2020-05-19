import { AwsElbAttachmentIntterface } from '../interfaces';
import { AwsElbAttachmentArgs,  AwsElbAttachmentAttrs } from '.';

export class AwsElbAttachment implements AwsElbAttachmentIntterface {
  	name: string = 'aws_elb_attachment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/elb_attachment.html';
	groupName: string = 'EC2 Resources';
	args: AwsElbAttachmentArgs;
	attrs: AwsElbAttachmentAttrs;

}
