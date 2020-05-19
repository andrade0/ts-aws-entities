import { AwsIamGroupPolicyAttachmentIntterface } from '../interfaces';
import { AwsIamGroupPolicyAttachmentArgs,  AwsIamGroupPolicyAttachmentAttrs } from '.';

export class AwsIamGroupPolicyAttachment implements AwsIamGroupPolicyAttachmentIntterface {
  	name: string = 'aws_iam_group_policy_attachment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_group_policy_attachment.html';
	groupName: string = 'IAM Resources';
	args: AwsIamGroupPolicyAttachmentArgs;
	attrs: AwsIamGroupPolicyAttachmentAttrs;

}
