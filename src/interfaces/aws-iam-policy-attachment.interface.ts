import { AwsIamPolicyAttachmentArgsIntterface, AwsIamPolicyAttachmentAttrsIntterface } from '.';

export interface AwsIamPolicyAttachmentIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsIamPolicyAttachmentArgsIntterface;
	attrs: AwsIamPolicyAttachmentAttrsIntterface;

}
