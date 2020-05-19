import { AwsSfnStateMachineArgsIntterface, AwsSfnStateMachineAttrsIntterface } from '.';

export interface AwsSfnStateMachineIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSfnStateMachineArgsIntterface;
	attrs: AwsSfnStateMachineAttrsIntterface;

}
