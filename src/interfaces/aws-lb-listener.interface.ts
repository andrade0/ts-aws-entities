import { AwsLbListenerArgsIntterface, AwsLbListenerAttrsIntterface } from '.';

export interface AwsLbListenerIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsLbListenerArgsIntterface;
  attrs: AwsLbListenerAttrsIntterface;

}
