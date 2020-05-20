import { AwsSesReceiptFilterIntterface } from '../interfaces';
import { AwsSesReceiptFilterArgs, AwsSesReceiptFilterAttrs } from '.';

export class AwsSesReceiptFilter implements AwsSesReceiptFilterIntterface {
  name: string = 'aws_ses_receipt_filter';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html';
  groupName: string = 'SES Resources';
  args: AwsSesReceiptFilterArgs;
  attrs: AwsSesReceiptFilterAttrs;

}
