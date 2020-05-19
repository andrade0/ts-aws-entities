import { AwsSesReceiptRuleIntterface } from '../interfaces';
import { AwsSesReceiptRuleArgs,  AwsSesReceiptRuleAttrs } from '.';

export class AwsSesReceiptRule implements AwsSesReceiptRuleIntterface {
  	name: string = 'aws_ses_receipt_rule';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule.html';
	groupName: string = 'SES Resources';
	args: AwsSesReceiptRuleArgs;
	attrs: AwsSesReceiptRuleAttrs;

}
