import { AwsDefaultSecurityGroupAttrsIntterface } from '../interfaces';


export class AwsDefaultSecurityGroupAttrs implements AwsDefaultSecurityGroupAttrsIntterface {
  	id?: string;
	vpc_id?: string;
	owner_id?: string;
	name?: string;
	description?: string;
	ingress?: string;
	egress?: string;

}
