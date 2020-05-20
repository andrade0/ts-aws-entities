import { AwsLambdaEventSourceMappingArgsIntterface, AwsLambdaEventSourceMappingAttrsIntterface } from '.';

export interface AwsLambdaEventSourceMappingIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsLambdaEventSourceMappingArgsIntterface;
  attrs: AwsLambdaEventSourceMappingAttrsIntterface;

}
