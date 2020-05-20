import { AwsCloudwatchLogSubscriptionFilterArgsIntterface } from '../interfaces';


export class AwsCloudwatchLogSubscriptionFilterArgs implements AwsCloudwatchLogSubscriptionFilterArgsIntterface {
  name: string;
  destination_arn: string;
  filter_pattern: string;
  log_group_name: string;
  role_arn?: string;
  distribution?: string;

}
