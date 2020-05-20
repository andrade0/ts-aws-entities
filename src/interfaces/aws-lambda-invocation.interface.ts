import { AwsLambdaInvocationArgsIntterface, AwsLambdaInvocationAttrsIntterface } from '.';

export interface AwsLambdaInvocationIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsLambdaInvocationArgsIntterface;
  attrs: AwsLambdaInvocationAttrsIntterface;

}
