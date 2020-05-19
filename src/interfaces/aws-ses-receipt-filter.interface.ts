import { AwsSesReceiptFilterArgsIntterface, AwsSesReceiptFilterAttrsIntterface } from '.';

export interface AwsSesReceiptFilterIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSesReceiptFilterArgsIntterface;
	attrs: AwsSesReceiptFilterAttrsIntterface;

}
