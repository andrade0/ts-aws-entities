import { AwsCodepipelineIntterface } from '../interfaces';
import { AwsCodepipelineArgs,  AwsCodepipelineAttrs } from '.';

export class AwsCodepipeline implements AwsCodepipelineIntterface {
  	name: string = 'aws_codepipeline';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/codepipeline.html';
	groupName: string = 'CodePipeline Resources';
	args: AwsCodepipelineArgs;
	attrs: AwsCodepipelineAttrs;

}
