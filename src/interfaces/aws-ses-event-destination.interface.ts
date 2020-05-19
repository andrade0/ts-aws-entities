import { AwsSesEventDestinationArgsIntterface, AwsSesEventDestinationAttrsIntterface } from '.';

export interface AwsSesEventDestinationIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSesEventDestinationArgsIntterface;
	attrs: AwsSesEventDestinationAttrsIntterface;

}
