import { AwsGameliftBuildArgsIntterface, AwsGameliftBuildAttrsIntterface } from '.';

export interface AwsGameliftBuildIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsGameliftBuildArgsIntterface;
  attrs: AwsGameliftBuildAttrsIntterface;

}
