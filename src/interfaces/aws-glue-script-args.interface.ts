import { AwsGlueScriptArgsDagEdgeIntterface, AwsGlueScriptArgsDagNodeIntterface } from '.';

export interface AwsGlueScriptArgsIntterface {
  	dag_edge: AwsGlueScriptArgsDagEdgeIntterface;
	dag_node: AwsGlueScriptArgsDagNodeIntterface;
	language?: string;
	name: string;
	value: string;
	param?: boolean;

}
