import { AwsWafIpsetArgsIntterface, AwsWafIpsetAttrsIntterface } from '.';

export interface AwsWafIpsetIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsWafIpsetArgsIntterface;
	attrs: AwsWafIpsetAttrsIntterface;

}
