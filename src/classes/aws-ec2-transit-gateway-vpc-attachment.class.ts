import { AwsEc2TransitGatewayVpcAttachmentIntterface } from '../interfaces';
import { AwsEc2TransitGatewayVpcAttachmentArgs, AwsEc2TransitGatewayVpcAttachmentAttrs } from '.';

export class AwsEc2TransitGatewayVpcAttachment implements AwsEc2TransitGatewayVpcAttachmentIntterface {
  name: string = 'aws_ec2_transit_gateway_vpc_attachment';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway_vpc_attachment.html';
  groupName: string = 'EC2 Resources';
  args: AwsEc2TransitGatewayVpcAttachmentArgs;
  attrs: AwsEc2TransitGatewayVpcAttachmentAttrs;

}
