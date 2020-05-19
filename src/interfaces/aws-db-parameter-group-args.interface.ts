import { AwsDbParameterGroupArgsParameterIntterface } from '.';

export interface AwsDbParameterGroupArgsIntterface {
  	name: string;
	name_prefix: string;
	family: string;
	description?: string;
	parameter?: AwsDbParameterGroupArgsParameterIntterface;
	tags?: string;

}
