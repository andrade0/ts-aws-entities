import { AwsTransferSshKeyArgsIntterface, AwsTransferSshKeyAttrsIntterface } from '.';

export interface AwsTransferSshKeyIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsTransferSshKeyArgsIntterface;
	attrs: AwsTransferSshKeyAttrsIntterface;

}
