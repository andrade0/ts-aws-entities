import { AwsSsmActivationArgsIntterface, AwsSsmActivationAttrsIntterface } from '.';

export interface AwsSsmActivationIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSsmActivationArgsIntterface;
	attrs: AwsSsmActivationAttrsIntterface;

}
