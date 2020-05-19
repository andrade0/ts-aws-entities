import { AwsCodepipelineArgsIntterface, AwsCodepipelineAttrsIntterface } from '.';

export interface AwsCodepipelineIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCodepipelineArgsIntterface;
	attrs: AwsCodepipelineAttrsIntterface;

}
