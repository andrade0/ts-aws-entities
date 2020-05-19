import { AwsVpcEndpointConnectionNotificationIntterface } from '../interfaces';
import { AwsVpcEndpointConnectionNotificationArgs,  AwsVpcEndpointConnectionNotificationAttrs } from '.';

export class AwsVpcEndpointConnectionNotification implements AwsVpcEndpointConnectionNotificationIntterface {
  	name: string = 'aws_vpc_endpoint_connection_notification';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html';
	groupName: string = 'VPC Resources';
	args: AwsVpcEndpointConnectionNotificationArgs;
	attrs: AwsVpcEndpointConnectionNotificationAttrs;

}
