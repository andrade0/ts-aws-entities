import { AwsIamInstanceProfileIntterface } from '../interfaces';
import { AwsIamInstanceProfileArgs,  AwsIamInstanceProfileAttrs } from '.';

export class AwsIamInstanceProfile implements AwsIamInstanceProfileIntterface {
  	name: string = 'aws_iam_instance_profile';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_instance_profile.html';
	groupName: string = 'IAM Resources';
	args: AwsIamInstanceProfileArgs;
	attrs: AwsIamInstanceProfileAttrs;

}
