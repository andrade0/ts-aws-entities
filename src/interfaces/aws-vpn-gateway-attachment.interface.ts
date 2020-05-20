import { AwsVpnGatewayAttachmentArgsIntterface, AwsVpnGatewayAttachmentAttrsIntterface } from '.';

export interface AwsVpnGatewayAttachmentIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsVpnGatewayAttachmentArgsIntterface;
  attrs: AwsVpnGatewayAttachmentAttrsIntterface;

}
