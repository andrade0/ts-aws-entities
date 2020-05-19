import { AwsLambdaInvocationIntterface } from '../interfaces';
import { AwsLambdaInvocationArgs,  AwsLambdaInvocationAttrs } from '.';

export class AwsLambdaInvocation implements AwsLambdaInvocationIntterface {
  	name: string = 'aws_lambda_invocation';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html';
	groupName: string = 'Data Sources';
	args: AwsLambdaInvocationArgs;
	attrs: AwsLambdaInvocationAttrs;

}
