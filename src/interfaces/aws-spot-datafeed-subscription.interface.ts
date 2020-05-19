import { AwsSpotDatafeedSubscriptionArgsIntterface, AwsSpotDatafeedSubscriptionAttrsIntterface } from '.';

export interface AwsSpotDatafeedSubscriptionIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSpotDatafeedSubscriptionArgsIntterface;
	attrs: AwsSpotDatafeedSubscriptionAttrsIntterface;

}
