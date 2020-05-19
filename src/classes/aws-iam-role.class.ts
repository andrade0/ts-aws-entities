import { AwsIamRoleIntterface } from '../interfaces';
import { AwsIamRoleArgs,  AwsIamRoleAttrs } from '.';

export class AwsIamRole implements AwsIamRoleIntterface {
  	name: string = 'aws_iam_role';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_role.html';
	groupName: string = 'IAM Resources';
	args: AwsIamRoleArgs;
	attrs: AwsIamRoleAttrs;

}
