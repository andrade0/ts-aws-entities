import { AwsCloudwatchLogSubscriptionFilterArgsIntterface, AwsCloudwatchLogSubscriptionFilterAttrsIntterface } from '.';

export interface AwsCloudwatchLogSubscriptionFilterIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCloudwatchLogSubscriptionFilterArgsIntterface;
  attrs: AwsCloudwatchLogSubscriptionFilterAttrsIntterface;

}
