import { AwsDbSecurityGroupArgsIntterface } from '../interfaces';
import { AwsDbSecurityGroupArgsIngress } from '.';

export class AwsDbSecurityGroupArgs implements AwsDbSecurityGroupArgsIntterface {
  name: string;
  description?: string;
  ingress: AwsDbSecurityGroupArgsIngress;
  tags?: string;

}
