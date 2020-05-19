import { AwsDbEventSubscriptionArgsIntterface, AwsDbEventSubscriptionAttrsIntterface } from '.';

export interface AwsDbEventSubscriptionIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsDbEventSubscriptionArgsIntterface;
	attrs: AwsDbEventSubscriptionAttrsIntterface;

}
