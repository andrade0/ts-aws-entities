import { AwsElbArgsIntterface, AwsElbAttrsIntterface } from '.';

export interface AwsElbIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsElbArgsIntterface;
  attrs: AwsElbAttrsIntterface;

}
