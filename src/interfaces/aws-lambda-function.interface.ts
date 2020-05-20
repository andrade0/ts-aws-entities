import { AwsLambdaFunctionArgsIntterface, AwsLambdaFunctionAttrsIntterface } from '.';

export interface AwsLambdaFunctionIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsLambdaFunctionArgsIntterface;
  attrs: AwsLambdaFunctionAttrsIntterface;

}
