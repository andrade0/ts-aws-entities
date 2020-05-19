import { AwsNetworkInterfaceAttachmentArgsIntterface, AwsNetworkInterfaceAttachmentAttrsIntterface } from '.';

export interface AwsNetworkInterfaceAttachmentIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsNetworkInterfaceAttachmentArgsIntterface;
	attrs: AwsNetworkInterfaceAttachmentAttrsIntterface;

}
