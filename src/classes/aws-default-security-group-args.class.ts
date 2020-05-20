import { AwsDefaultSecurityGroupArgsIntterface } from '../interfaces';


export class AwsDefaultSecurityGroupArgs implements AwsDefaultSecurityGroupArgsIntterface {
  ingress?: string;
  egress: string;
  vpc_id: string;
  tags?: string;

}
