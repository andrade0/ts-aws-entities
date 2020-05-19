import { AwsRedshiftSecurityGroupArgsIngressIntterface } from '.';

export interface AwsRedshiftSecurityGroupArgsIntterface {
  	name: string;
	description?: string;
	ingress?: AwsRedshiftSecurityGroupArgsIngressIntterface;

}
