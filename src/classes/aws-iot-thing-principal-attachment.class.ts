import { AwsIotThingPrincipalAttachmentIntterface } from '../interfaces';
import { AwsIotThingPrincipalAttachmentArgs,  AwsIotThingPrincipalAttachmentAttrs } from '.';

export class AwsIotThingPrincipalAttachment implements AwsIotThingPrincipalAttachmentIntterface {
  	name: string = 'aws_iot_thing_principal_attachment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html';
	groupName: string = 'IoT Resources';
	args: AwsIotThingPrincipalAttachmentArgs;
	attrs: AwsIotThingPrincipalAttachmentAttrs;

}
