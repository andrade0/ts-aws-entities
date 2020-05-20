import { AwsLambdaPermissionArgsIntterface, AwsLambdaPermissionAttrsIntterface } from '.';

export interface AwsLambdaPermissionIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsLambdaPermissionArgsIntterface;
  attrs: AwsLambdaPermissionAttrsIntterface;

}
