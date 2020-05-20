import { AwsSesActiveReceiptRuleSetIntterface } from '../interfaces';
import { AwsSesActiveReceiptRuleSetArgs, AwsSesActiveReceiptRuleSetAttrs } from '.';

export class AwsSesActiveReceiptRuleSet implements AwsSesActiveReceiptRuleSetIntterface {
  name: string = 'aws_ses_active_receipt_rule_set';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ses_active_receipt_rule_set.html';
  groupName: string = 'SES Resources';
  args: AwsSesActiveReceiptRuleSetArgs;
  attrs: AwsSesActiveReceiptRuleSetAttrs;

}
