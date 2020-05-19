import { AwsDbSecurityGroupArgsIngressIntterface } from '../interfaces';


export class AwsDbSecurityGroupArgsIngress implements AwsDbSecurityGroupArgsIngressIntterface {
  	cidr: string;
	security_group_name: string;
	security_group_id: string;
	security_group_owner_id: string;

}
