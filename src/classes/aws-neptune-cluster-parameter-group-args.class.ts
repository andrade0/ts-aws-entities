import { AwsNeptuneClusterParameterGroupArgsIntterface } from '../interfaces';
import { AwsNeptuneClusterParameterGroupArgsParameter } from '.';

export class AwsNeptuneClusterParameterGroupArgs implements AwsNeptuneClusterParameterGroupArgsIntterface {
  	name: string;
	name_prefix: string;
	family: string;
	description?: string;
	parameter?: AwsNeptuneClusterParameterGroupArgsParameter;
	tags?: string;

}
