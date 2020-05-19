import { AwsIotPolicyAttachmentIntterface } from '../interfaces';
import { AwsIotPolicyAttachmentArgs,  AwsIotPolicyAttachmentAttrs } from '.';

export class AwsIotPolicyAttachment implements AwsIotPolicyAttachmentIntterface {
  	name: string = 'aws_iot_policy_attachment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iot_policy_attachment.html';
	groupName: string = 'IoT Resources';
	args: AwsIotPolicyAttachmentArgs;
	attrs: AwsIotPolicyAttachmentAttrs;

}
