import { AwsOpsworksApplicationArgsIntterface, AwsOpsworksApplicationAttrsIntterface } from '.';

export interface AwsOpsworksApplicationIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsOpsworksApplicationArgsIntterface;
	attrs: AwsOpsworksApplicationAttrsIntterface;

}
