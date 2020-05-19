import { AwsTransferServerArgsIntterface, AwsTransferServerAttrsIntterface } from '.';

export interface AwsTransferServerIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsTransferServerArgsIntterface;
	attrs: AwsTransferServerAttrsIntterface;

}
