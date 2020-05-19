import { AwsRoute53RecordArgsIntterface, AwsRoute53RecordAttrsIntterface } from '.';

export interface AwsRoute53RecordIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsRoute53RecordArgsIntterface;
	attrs: AwsRoute53RecordAttrsIntterface;

}
