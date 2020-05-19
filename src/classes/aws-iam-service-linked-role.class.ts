import { AwsIamServiceLinkedRoleIntterface } from '../interfaces';
import { AwsIamServiceLinkedRoleArgs,  AwsIamServiceLinkedRoleAttrs } from '.';

export class AwsIamServiceLinkedRole implements AwsIamServiceLinkedRoleIntterface {
  	name: string = 'aws_iam_service_linked_role';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_service_linked_role.html';
	groupName: string = 'IAM Resources';
	args: AwsIamServiceLinkedRoleArgs;
	attrs: AwsIamServiceLinkedRoleAttrs;

}
