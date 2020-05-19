import { AwsDbParameterGroupArgsIntterface, AwsDbParameterGroupAttrsIntterface } from '.';

export interface AwsDbParameterGroupIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsDbParameterGroupArgsIntterface;
	attrs: AwsDbParameterGroupAttrsIntterface;

}
