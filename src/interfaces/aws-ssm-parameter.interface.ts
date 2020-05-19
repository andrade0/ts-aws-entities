import { AwsSsmParameterArgsIntterface, AwsSsmParameterAttrsIntterface } from '.';

export interface AwsSsmParameterIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSsmParameterArgsIntterface;
	attrs: AwsSsmParameterAttrsIntterface;

}
