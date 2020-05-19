import { AwsGlueScriptIntterface } from '../interfaces';
import { AwsGlueScriptArgs,  AwsGlueScriptAttrs } from '.';

export class AwsGlueScript implements AwsGlueScriptIntterface {
  	name: string = 'aws_glue_script';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/glue_script.html';
	groupName: string = 'Data Sources';
	args: AwsGlueScriptArgs;
	attrs: AwsGlueScriptAttrs;

}
