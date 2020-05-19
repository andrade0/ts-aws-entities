import { AwsSesReceiptRuleSetArgsIntterface, AwsSesReceiptRuleSetAttrsIntterface } from '.';

export interface AwsSesReceiptRuleSetIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSesReceiptRuleSetArgsIntterface;
	attrs: AwsSesReceiptRuleSetAttrsIntterface;

}
