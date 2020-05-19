import { AwsDbOptionGroupArgsOptionIntterface } from '../interfaces';


export class AwsDbOptionGroupArgsOption implements AwsDbOptionGroupArgsOptionIntterface {
  	option_name: string;
	option_settings?: string;
	port?: string;
	version?: string;
	db_security_group_memberships?: string;
	vpc_security_group_memberships?: string;
	name?: string;
	value?: string;

}
