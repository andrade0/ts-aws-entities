import { AwsRedshiftSecurityGroupArgsIntterface } from '../interfaces';
import { AwsRedshiftSecurityGroupArgsIngress } from '.';

export class AwsRedshiftSecurityGroupArgs implements AwsRedshiftSecurityGroupArgsIntterface {
  	name: string;
	description?: string;
	ingress?: AwsRedshiftSecurityGroupArgsIngress;

}
