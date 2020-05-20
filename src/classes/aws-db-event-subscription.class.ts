import { AwsDbEventSubscriptionIntterface } from '../interfaces';
import { AwsDbEventSubscriptionArgs, AwsDbEventSubscriptionAttrs } from '.';

export class AwsDbEventSubscription implements AwsDbEventSubscriptionIntterface {
  name: string = 'aws_db_event_subscription';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/db_event_subscription.html';
  groupName: string = 'RDS Resources';
  args: AwsDbEventSubscriptionArgs;
  attrs: AwsDbEventSubscriptionAttrs;

}
