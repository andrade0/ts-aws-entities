import { AwsSesReceiptRuleArgsIntterface, AwsSesReceiptRuleAttrsIntterface } from '.';

export interface AwsSesReceiptRuleIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSesReceiptRuleArgsIntterface;
	attrs: AwsSesReceiptRuleAttrsIntterface;

}
