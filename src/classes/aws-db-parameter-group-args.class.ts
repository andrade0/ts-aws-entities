import { AwsDbParameterGroupArgsIntterface } from '../interfaces';
import { AwsDbParameterGroupArgsParameter } from '.';

export class AwsDbParameterGroupArgs implements AwsDbParameterGroupArgsIntterface {
  	name: string;
	name_prefix: string;
	family: string;
	description?: string;
	parameter?: AwsDbParameterGroupArgsParameter;
	tags?: string;

}
