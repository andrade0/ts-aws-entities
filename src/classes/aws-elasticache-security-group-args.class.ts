import { AwsElasticacheSecurityGroupArgsIntterface } from '../interfaces';


export class AwsElasticacheSecurityGroupArgs implements AwsElasticacheSecurityGroupArgsIntterface {
  	name: string;
	description?: string;
	security_group_names: string;

}
