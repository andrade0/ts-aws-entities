import { AwsSecurityhubStandardsSubscriptionIntterface } from '../interfaces';
import { AwsSecurityhubStandardsSubscriptionArgs, AwsSecurityhubStandardsSubscriptionAttrs } from '.';

export class AwsSecurityhubStandardsSubscription implements AwsSecurityhubStandardsSubscriptionIntterface {
  name: string = 'aws_securityhub_standards_subscription';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/securityhub_standards_subscription.html';
  groupName: string = 'Security Hub Resources';
  args: AwsSecurityhubStandardsSubscriptionArgs;
  attrs: AwsSecurityhubStandardsSubscriptionAttrs;

}
