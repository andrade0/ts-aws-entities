import { AwsDbSecurityGroupArgsIngressIntterface } from '.';

export interface AwsDbSecurityGroupArgsIntterface {
  name: string;
  description?: string;
  ingress: AwsDbSecurityGroupArgsIngressIntterface;
  tags?: string;

}
