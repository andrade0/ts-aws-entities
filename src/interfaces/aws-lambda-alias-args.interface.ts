import { AwsLambdaAliasArgsRoutingConfigIntterface } from '.';

export interface AwsLambdaAliasArgsIntterface {
  name: string;
  description?: string;
  function_name: string;
  function_version: string;
  routing_config?: AwsLambdaAliasArgsRoutingConfigIntterface;

}
