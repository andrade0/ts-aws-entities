import { AwsMqBrokerArgsUserIntterface } from '../interfaces';


export class AwsMqBrokerArgsUser implements AwsMqBrokerArgsUserIntterface {
  	console_access?: string;
	groups?: string;
	password: string;
	username: string;

}
