import { AwsLambdaAliasArgsIntterface } from '../interfaces';
import { AwsLambdaAliasArgsRoutingConfig } from '.';

export class AwsLambdaAliasArgs implements AwsLambdaAliasArgsIntterface {
  	name: string;
	description?: string;
	function_name: string;
	function_version: string;
	routing_config?: AwsLambdaAliasArgsRoutingConfig;

}
