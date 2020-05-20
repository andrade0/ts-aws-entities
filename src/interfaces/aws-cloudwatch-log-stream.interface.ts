import { AwsCloudwatchLogStreamArgsIntterface, AwsCloudwatchLogStreamAttrsIntterface } from '.';

export interface AwsCloudwatchLogStreamIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCloudwatchLogStreamArgsIntterface;
  attrs: AwsCloudwatchLogStreamAttrsIntterface;

}
