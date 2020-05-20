import { AwsGameliftFleetArgsIntterface, AwsGameliftFleetAttrsIntterface } from '.';

export interface AwsGameliftFleetIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsGameliftFleetArgsIntterface;
  attrs: AwsGameliftFleetAttrsIntterface;

}
