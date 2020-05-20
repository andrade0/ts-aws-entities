import { AwsRoute53QueryLogArgsIntterface, AwsRoute53QueryLogAttrsIntterface } from '.';

export interface AwsRoute53QueryLogIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsRoute53QueryLogArgsIntterface;
  attrs: AwsRoute53QueryLogAttrsIntterface;

}
