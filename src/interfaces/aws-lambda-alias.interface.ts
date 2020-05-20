import { AwsLambdaAliasArgsIntterface, AwsLambdaAliasAttrsIntterface } from '.';

export interface AwsLambdaAliasIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsLambdaAliasArgsIntterface;
  attrs: AwsLambdaAliasAttrsIntterface;

}
