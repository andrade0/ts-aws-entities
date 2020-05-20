import {
  AwsLambdaFunctionArgsDeadLetterConfigIntterface,
  AwsLambdaFunctionArgsEnvironmentIntterface,
  AwsLambdaFunctionArgsVpcConfigIntterface,
} from '.';

export interface AwsLambdaFunctionArgsIntterface {
  filename?: string;
  s3_bucket?: string;
  s3_key?: string;
  s3_object_version?: string;
  function_name: string;
  dead_letter_config?: AwsLambdaFunctionArgsDeadLetterConfigIntterface;
  handler: string;
  role: string;
  description?: string;
  layers?: string;
  memory_size?: string;
  runtime: string;
  timeout?: string;
  reserved_concurrent_executions?: string;
  publish?: string;
  vpc_config?: AwsLambdaFunctionArgsVpcConfigIntterface;
  environment?: AwsLambdaFunctionArgsEnvironmentIntterface;
  kms_key_arn?: string;
  source_code_hash?: string;
  tags?: string;
  mode: string;

}
