import { AwsNetworkInterfaceSgAttachmentIntterface } from '../interfaces';
import { AwsNetworkInterfaceSgAttachmentArgs, AwsNetworkInterfaceSgAttachmentAttrs } from '.';

export class AwsNetworkInterfaceSgAttachment implements AwsNetworkInterfaceSgAttachmentIntterface {
  name: string = 'aws_network_interface_sg_attachment';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/network_interface_sg_attachment.html';
  groupName: string = 'VPC Resources';
  args: AwsNetworkInterfaceSgAttachmentArgs;
  attrs: AwsNetworkInterfaceSgAttachmentAttrs;

}
