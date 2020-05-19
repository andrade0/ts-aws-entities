import { AwsMqBrokerIntterface } from '../interfaces';
import { AwsMqBrokerArgs,  AwsMqBrokerAttrs } from '.';

export class AwsMqBroker implements AwsMqBrokerIntterface {
  	name: string = 'aws_mq_broker';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/mq_broker.html';
	groupName: string = 'MQ Resources';
	args: AwsMqBrokerArgs;
	attrs: AwsMqBrokerAttrs;

}
