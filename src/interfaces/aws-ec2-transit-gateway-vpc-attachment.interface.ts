import { AwsEc2TransitGatewayVpcAttachmentArgsIntterface, AwsEc2TransitGatewayVpcAttachmentAttrsIntterface } from '.';

export interface AwsEc2TransitGatewayVpcAttachmentIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEc2TransitGatewayVpcAttachmentArgsIntterface;
  attrs: AwsEc2TransitGatewayVpcAttachmentAttrsIntterface;

}
