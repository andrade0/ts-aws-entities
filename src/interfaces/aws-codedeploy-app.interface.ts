import { AwsCodedeployAppArgsIntterface, AwsCodedeployAppAttrsIntterface } from '.';

export interface AwsCodedeployAppIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCodedeployAppArgsIntterface;
	attrs: AwsCodedeployAppAttrsIntterface;

}
