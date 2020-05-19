import { AwsOrganizationsPolicyAttachmentIntterface } from '../interfaces';
import { AwsOrganizationsPolicyAttachmentArgs,  AwsOrganizationsPolicyAttachmentAttrs } from '.';

export class AwsOrganizationsPolicyAttachment implements AwsOrganizationsPolicyAttachmentIntterface {
  	name: string = 'aws_organizations_policy_attachment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/organizations_policy_attachment.html';
	groupName: string = 'Organizations Resources';
	args: AwsOrganizationsPolicyAttachmentArgs;
	attrs: AwsOrganizationsPolicyAttachmentAttrs;

}
