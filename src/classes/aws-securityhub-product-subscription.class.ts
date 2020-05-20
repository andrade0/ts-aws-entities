import { AwsSecurityhubProductSubscriptionIntterface } from '../interfaces';
import { AwsSecurityhubProductSubscriptionArgs, AwsSecurityhubProductSubscriptionAttrs } from '.';

export class AwsSecurityhubProductSubscription implements AwsSecurityhubProductSubscriptionIntterface {
  name: string = 'aws_securityhub_product_subscription';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/securityhub_product_subscription.html';
  groupName: string = 'Security Hub Resources';
  args: AwsSecurityhubProductSubscriptionArgs;
  attrs: AwsSecurityhubProductSubscriptionAttrs;

}
