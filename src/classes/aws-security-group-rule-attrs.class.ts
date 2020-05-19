import { AwsSecurityGroupRuleAttrsIntterface } from '../interfaces';


export class AwsSecurityGroupRuleAttrs implements AwsSecurityGroupRuleAttrsIntterface {
  	id?: string;
	type?: string;
	from_port?: string;
	to_port?: string;
	protocol?: string;
	description?: string;

}
