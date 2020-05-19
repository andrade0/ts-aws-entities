import { AwsRoute53ZoneArgsIntterface, AwsRoute53ZoneAttrsIntterface } from '.';

export interface AwsRoute53ZoneIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsRoute53ZoneArgsIntterface;
	attrs: AwsRoute53ZoneAttrsIntterface;

}
