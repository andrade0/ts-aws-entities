import { AwsIamPolicyAttachmentArgsIntterface } from '../interfaces';


export class AwsIamPolicyAttachmentArgs implements AwsIamPolicyAttachmentArgsIntterface {
  	name: string;
	users?: string;
	roles?: string;
	groups?: string;
	policy_arn: string;

}
