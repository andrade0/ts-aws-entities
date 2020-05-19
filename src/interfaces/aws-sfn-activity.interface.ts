import { AwsSfnActivityArgsIntterface, AwsSfnActivityAttrsIntterface } from '.';

export interface AwsSfnActivityIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSfnActivityArgsIntterface;
	attrs: AwsSfnActivityAttrsIntterface;

}
