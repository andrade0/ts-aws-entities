import { AwsIamPolicyDocumentArgsIntterface, AwsIamPolicyDocumentAttrsIntterface } from '.';

export interface AwsIamPolicyDocumentIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsIamPolicyDocumentArgsIntterface;
	attrs: AwsIamPolicyDocumentAttrsIntterface;

}
