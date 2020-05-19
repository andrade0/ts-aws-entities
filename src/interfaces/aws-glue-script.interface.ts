import { AwsGlueScriptArgsIntterface, AwsGlueScriptAttrsIntterface } from '.';

export interface AwsGlueScriptIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsGlueScriptArgsIntterface;
	attrs: AwsGlueScriptAttrsIntterface;

}
