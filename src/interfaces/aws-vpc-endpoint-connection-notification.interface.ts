import {
  AwsVpcEndpointConnectionNotificationArgsIntterface,
  AwsVpcEndpointConnectionNotificationAttrsIntterface,
} from '.';

export interface AwsVpcEndpointConnectionNotificationIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsVpcEndpointConnectionNotificationArgsIntterface;
  attrs: AwsVpcEndpointConnectionNotificationAttrsIntterface;

}
