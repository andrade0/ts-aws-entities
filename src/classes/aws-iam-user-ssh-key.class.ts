import { AwsIamUserSshKeyIntterface } from '../interfaces';
import { AwsIamUserSshKeyArgs,  AwsIamUserSshKeyAttrs } from '.';

export class AwsIamUserSshKey implements AwsIamUserSshKeyIntterface {
  	name: string = 'aws_iam_user_ssh_key';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_user_ssh_key.html';
	groupName: string = 'IAM Resources';
	args: AwsIamUserSshKeyArgs;
	attrs: AwsIamUserSshKeyAttrs;

}
