import { AwsCloudformationStackIntterface } from '../interfaces';
import { AwsCloudformationStackArgs,  AwsCloudformationStackAttrs } from '.';

export class AwsCloudformationStack implements AwsCloudformationStackIntterface {
  	name: string = 'aws_cloudformation_stack';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html';
	groupName: string = 'CloudFormation Resources';
	args: AwsCloudformationStackArgs;
	attrs: AwsCloudformationStackAttrs;

}
