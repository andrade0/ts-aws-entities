import { AwsSecurityhubProductSubscriptionArgsIntterface, AwsSecurityhubProductSubscriptionAttrsIntterface } from '.';

export interface AwsSecurityhubProductSubscriptionIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSecurityhubProductSubscriptionArgsIntterface;
	attrs: AwsSecurityhubProductSubscriptionAttrsIntterface;

}
