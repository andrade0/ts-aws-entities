import { AwsLbSslNegotiationPolicyArgsIntterface } from '../interfaces';
import { AwsLbSslNegotiationPolicyArgsAttribute } from '.';

export class AwsLbSslNegotiationPolicyArgs implements AwsLbSslNegotiationPolicyArgsIntterface {
  name: string;
  load_balancer: string;
  lb_port: string;
  attribute?: AwsLbSslNegotiationPolicyArgsAttribute;

}
