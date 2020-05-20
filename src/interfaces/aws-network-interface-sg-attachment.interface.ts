import { AwsNetworkInterfaceSgAttachmentArgsIntterface, AwsNetworkInterfaceSgAttachmentAttrsIntterface } from '.';

export interface AwsNetworkInterfaceSgAttachmentIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsNetworkInterfaceSgAttachmentArgsIntterface;
  attrs: AwsNetworkInterfaceSgAttachmentAttrsIntterface;

}
