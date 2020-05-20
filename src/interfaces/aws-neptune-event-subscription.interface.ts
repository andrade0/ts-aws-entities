import { AwsNeptuneEventSubscriptionArgsIntterface, AwsNeptuneEventSubscriptionAttrsIntterface } from '.';

export interface AwsNeptuneEventSubscriptionIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsNeptuneEventSubscriptionArgsIntterface;
  attrs: AwsNeptuneEventSubscriptionAttrsIntterface;

}
