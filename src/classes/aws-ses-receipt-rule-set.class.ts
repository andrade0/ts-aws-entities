import { AwsSesReceiptRuleSetIntterface } from '../interfaces';
import { AwsSesReceiptRuleSetArgs, AwsSesReceiptRuleSetAttrs } from '.';

export class AwsSesReceiptRuleSet implements AwsSesReceiptRuleSetIntterface {
  name: string = 'aws_ses_receipt_rule_set';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule_set.html';
  groupName: string = 'SES Resources';
  args: AwsSesReceiptRuleSetArgs;
  attrs: AwsSesReceiptRuleSetAttrs;

}
