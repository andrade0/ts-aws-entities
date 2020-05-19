import { AwsIamAccessKeyIntterface } from '../interfaces';
import { AwsIamAccessKeyArgs,  AwsIamAccessKeyAttrs } from '.';

export class AwsIamAccessKey implements AwsIamAccessKeyIntterface {
  	name: string = 'aws_iam_access_key';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iam_access_key.html';
	groupName: string = 'IAM Resources';
	args: AwsIamAccessKeyArgs;
	attrs: AwsIamAccessKeyAttrs;

}
