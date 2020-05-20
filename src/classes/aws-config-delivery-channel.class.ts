import { AwsConfigDeliveryChannelIntterface } from '../interfaces';
import { AwsConfigDeliveryChannelArgs, AwsConfigDeliveryChannelAttrs } from '.';

export class AwsConfigDeliveryChannel implements AwsConfigDeliveryChannelIntterface {
  name: string = 'aws_config_delivery_channel';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html';
  groupName: string = 'Config Resources';
  args: AwsConfigDeliveryChannelArgs;
  attrs: AwsConfigDeliveryChannelAttrs;

}
