import { AwsRedshiftSecurityGroupArgsIngressIntterface } from '../interfaces';


export class AwsRedshiftSecurityGroupArgsIngress implements AwsRedshiftSecurityGroupArgsIngressIntterface {
  cidr: string;
  security_group_name: string;
  security_group_owner_id: string;

}
