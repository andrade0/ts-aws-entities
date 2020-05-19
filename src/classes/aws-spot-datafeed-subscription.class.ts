import { AwsSpotDatafeedSubscriptionIntterface } from '../interfaces';
import { AwsSpotDatafeedSubscriptionArgs,  AwsSpotDatafeedSubscriptionAttrs } from '.';

export class AwsSpotDatafeedSubscription implements AwsSpotDatafeedSubscriptionIntterface {
  	name: string = 'aws_spot_datafeed_subscription';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/spot_datafeed_subscription.html';
	groupName: string = 'EC2 Resources';
	args: AwsSpotDatafeedSubscriptionArgs;
	attrs: AwsSpotDatafeedSubscriptionAttrs;

}
