import { AwsSesReceiptRuleArgsBounceActionIntterface } from '../interfaces';


export class AwsSesReceiptRuleArgsBounceAction implements AwsSesReceiptRuleArgsBounceActionIntterface {
  	message: string;
	sender: string;
	smtp_reply_code: string;
	status_code?: string;
	topic_arn?: string;
	position: string;

}
