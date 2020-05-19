import { AwsVpcEndpointConnectionNotificationArgsIntterface } from '../interfaces';


export class AwsVpcEndpointConnectionNotificationArgs implements AwsVpcEndpointConnectionNotificationArgsIntterface {
  	vpc_endpoint_service_id?: string;
	vpc_endpoint_id?: string;
	connection_notification_arn: string;
	connection_events: string;

}
