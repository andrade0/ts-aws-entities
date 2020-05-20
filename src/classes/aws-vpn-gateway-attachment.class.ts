import { AwsVpnGatewayAttachmentIntterface } from '../interfaces';
import { AwsVpnGatewayAttachmentArgs, AwsVpnGatewayAttachmentAttrs } from '.';

export class AwsVpnGatewayAttachment implements AwsVpnGatewayAttachmentIntterface {
  name: string = 'aws_vpn_gateway_attachment';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/vpn_gateway_attachment.html';
  groupName: string = 'VPC Resources';
  args: AwsVpnGatewayAttachmentArgs;
  attrs: AwsVpnGatewayAttachmentAttrs;

}
