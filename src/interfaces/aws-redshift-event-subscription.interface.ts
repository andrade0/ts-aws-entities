import { AwsRedshiftEventSubscriptionArgsIntterface, AwsRedshiftEventSubscriptionAttrsIntterface } from '.';

export interface AwsRedshiftEventSubscriptionIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsRedshiftEventSubscriptionArgsIntterface;
  attrs: AwsRedshiftEventSubscriptionAttrsIntterface;

}
