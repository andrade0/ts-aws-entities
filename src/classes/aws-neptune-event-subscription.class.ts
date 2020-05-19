import { AwsNeptuneEventSubscriptionIntterface } from '../interfaces';
import { AwsNeptuneEventSubscriptionArgs,  AwsNeptuneEventSubscriptionAttrs } from '.';

export class AwsNeptuneEventSubscription implements AwsNeptuneEventSubscriptionIntterface {
  	name: string = 'aws_neptune_event_subscription';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/neptune_event_subscription.html';
	groupName: string = 'Neptune Resources';
	args: AwsNeptuneEventSubscriptionArgs;
	attrs: AwsNeptuneEventSubscriptionAttrs;

}
