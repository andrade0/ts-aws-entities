import { AwsConfigDeliveryChannelArgsIntterface, AwsConfigDeliveryChannelAttrsIntterface } from '.';

export interface AwsConfigDeliveryChannelIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsConfigDeliveryChannelArgsIntterface;
  attrs: AwsConfigDeliveryChannelAttrsIntterface;

}
