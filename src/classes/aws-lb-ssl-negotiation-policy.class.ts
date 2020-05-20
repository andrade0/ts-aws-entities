import { AwsLbSslNegotiationPolicyIntterface } from '../interfaces';
import { AwsLbSslNegotiationPolicyArgs, AwsLbSslNegotiationPolicyAttrs } from '.';

export class AwsLbSslNegotiationPolicy implements AwsLbSslNegotiationPolicyIntterface {
  name: string = 'aws_lb_ssl_negotiation_policy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html';
  groupName: string = 'EC2 Resources';
  args: AwsLbSslNegotiationPolicyArgs;
  attrs: AwsLbSslNegotiationPolicyAttrs;

}
