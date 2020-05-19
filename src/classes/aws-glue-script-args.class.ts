import { AwsGlueScriptArgsIntterface } from '../interfaces';
import { AwsGlueScriptArgsDagEdge,  AwsGlueScriptArgsDagNode } from '.';

export class AwsGlueScriptArgs implements AwsGlueScriptArgsIntterface {
  	dag_edge: AwsGlueScriptArgsDagEdge;
	dag_node: AwsGlueScriptArgsDagNode;
	language?: string;
	name: string;
	value: string;
	param?: boolean;

}
