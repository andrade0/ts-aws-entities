import { AwsIamPolicyAttachmentIntterface } from '../interfaces';
import { AwsIamPolicyAttachmentArgs,  AwsIamPolicyAttachmentAttrs } from '.';

export class AwsIamPolicyAttachment implements AwsIamPolicyAttachmentIntterface {
  	name: string = 'aws_iam_policy_attachment';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html';
	groupName: string = 'IAM Resources';
	args: AwsIamPolicyAttachmentArgs;
	attrs: AwsIamPolicyAttachmentAttrs;

}
