import { AwsDbOptionGroupArgsOptionIntterface } from '.';

export interface AwsDbOptionGroupArgsIntterface {
  	name: string;
	name_prefix: string;
	option_group_description?: string;
	engine_name: string;
	major_engine_version: string;
	option?: AwsDbOptionGroupArgsOptionIntterface;
	tags?: string;

}
