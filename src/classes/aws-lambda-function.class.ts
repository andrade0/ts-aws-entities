import { AwsLambdaFunctionIntterface } from '../interfaces';
import { AwsLambdaFunctionArgs,  AwsLambdaFunctionAttrs } from '.';

export class AwsLambdaFunction implements AwsLambdaFunctionIntterface {
  	name: string = 'aws_lambda_function';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lambda_function.html';
	groupName: string = 'Lambda Resources';
	args: AwsLambdaFunctionArgs;
	attrs: AwsLambdaFunctionAttrs;

}
