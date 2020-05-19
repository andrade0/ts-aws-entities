import { AwsNeptuneParameterGroupArgsParameterIntterface } from '.';

export interface AwsNeptuneParameterGroupArgsIntterface {
  	name: string;
	family: string;
	description?: string;
	parameter?: AwsNeptuneParameterGroupArgsParameterIntterface;
	tags?: string;

}
