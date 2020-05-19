import { AwsLambdaEventSourceMappingIntterface } from '../interfaces';
import { AwsLambdaEventSourceMappingArgs,  AwsLambdaEventSourceMappingAttrs } from '.';

export class AwsLambdaEventSourceMapping implements AwsLambdaEventSourceMappingIntterface {
  	name: string = 'aws_lambda_event_source_mapping';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html';
	groupName: string = 'Lambda Resources';
	args: AwsLambdaEventSourceMappingArgs;
	attrs: AwsLambdaEventSourceMappingAttrs;

}
