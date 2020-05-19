import { AwsDocdbClusterParameterGroupArgsParameterIntterface } from '.';

export interface AwsDocdbClusterParameterGroupArgsIntterface {
  	name: string;
	name_prefix: string;
	family: string;
	description: string;
	parameter?: AwsDocdbClusterParameterGroupArgsParameterIntterface;
	tags?: string;

}
