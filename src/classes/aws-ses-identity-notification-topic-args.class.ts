import { AwsSesIdentityNotificationTopicArgsIntterface } from '../interfaces';


export class AwsSesIdentityNotificationTopicArgs implements AwsSesIdentityNotificationTopicArgsIntterface {
  	topic_arn?: string;
	notification_type: string;
	identity: string;

}
