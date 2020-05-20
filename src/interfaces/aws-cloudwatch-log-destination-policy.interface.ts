import { AwsCloudwatchLogDestinationPolicyArgsIntterface, AwsCloudwatchLogDestinationPolicyAttrsIntterface } from '.';

export interface AwsCloudwatchLogDestinationPolicyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCloudwatchLogDestinationPolicyArgsIntterface;
  attrs: AwsCloudwatchLogDestinationPolicyAttrsIntterface;

}
