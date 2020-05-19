import { AwsRedshiftEventSubscriptionIntterface } from '../interfaces';
import { AwsRedshiftEventSubscriptionArgs,  AwsRedshiftEventSubscriptionAttrs } from '.';

export class AwsRedshiftEventSubscription implements AwsRedshiftEventSubscriptionIntterface {
  	name: string = 'aws_redshift_event_subscription';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/redshift_event_subscription.html';
	groupName: string = 'Redshift Resources';
	args: AwsRedshiftEventSubscriptionArgs;
	attrs: AwsRedshiftEventSubscriptionAttrs;

}
