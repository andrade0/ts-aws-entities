import { AwsLambdaPermissionIntterface } from '../interfaces';
import { AwsLambdaPermissionArgs,  AwsLambdaPermissionAttrs } from '.';

export class AwsLambdaPermission implements AwsLambdaPermissionIntterface {
  	name: string = 'aws_lambda_permission';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lambda_permission.html';
	groupName: string = 'Lambda Resources';
	args: AwsLambdaPermissionArgs;
	attrs: AwsLambdaPermissionAttrs;

}
