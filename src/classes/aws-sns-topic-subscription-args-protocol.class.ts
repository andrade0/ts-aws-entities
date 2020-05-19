import { AwsSnsTopicSubscriptionArgsProtocolIntterface } from '../interfaces';


export class AwsSnsTopicSubscriptionArgsProtocol implements AwsSnsTopicSubscriptionArgsProtocolIntterface {
  	lambda: string;
	sqs: string;
	application: string;
	sms: string;
	http: string;
	https: string;
	email: string;

}
