import { AwsSecurityGroupArgsEgressIntterface, AwsSecurityGroupArgsIngressIntterface } from '.';

export interface AwsSecurityGroupArgsIntterface {
  name: string;
  name_prefix: string;
  description: string;
  ingress?: AwsSecurityGroupArgsIngressIntterface;
  egress: AwsSecurityGroupArgsEgressIntterface;
  revoke_rules_on_delete?: string;
  vpc_id: string;
  tags?: string;

}
