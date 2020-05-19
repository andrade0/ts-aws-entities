import { AwsNeptuneClusterParameterGroupArgsParameterIntterface } from '.';

export interface AwsNeptuneClusterParameterGroupArgsIntterface {
  	name: string;
	name_prefix: string;
	family: string;
	description?: string;
	parameter?: AwsNeptuneClusterParameterGroupArgsParameterIntterface;
	tags?: string;

}
