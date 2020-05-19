import { AwsIamPolicyIntterface } from '../interfaces';
import { AwsIamPolicyArgs,  AwsIamPolicyAttrs } from '.';

export class AwsIamPolicy implements AwsIamPolicyIntterface {
  	name: string = 'aws_iam_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_policy.html';
	groupName: string = 'IAM Resources';
	args: AwsIamPolicyArgs;
	attrs: AwsIamPolicyAttrs;

}
