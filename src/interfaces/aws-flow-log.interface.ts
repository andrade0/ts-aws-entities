import { AwsFlowLogArgsIntterface, AwsFlowLogAttrsIntterface } from '.';

export interface AwsFlowLogIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsFlowLogArgsIntterface;
	attrs: AwsFlowLogAttrsIntterface;

}
