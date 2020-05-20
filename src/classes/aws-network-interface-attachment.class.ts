import { AwsNetworkInterfaceAttachmentIntterface } from '../interfaces';
import { AwsNetworkInterfaceAttachmentArgs, AwsNetworkInterfaceAttachmentAttrs } from '.';

export class AwsNetworkInterfaceAttachment implements AwsNetworkInterfaceAttachmentIntterface {
  name: string = 'aws_network_interface_attachment';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/network_interface_attachment.html';
  groupName: string = 'VPC Resources';
  args: AwsNetworkInterfaceAttachmentArgs;
  attrs: AwsNetworkInterfaceAttachmentAttrs;

}
