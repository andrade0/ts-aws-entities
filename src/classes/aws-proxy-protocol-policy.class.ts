import { AwsProxyProtocolPolicyIntterface } from '../interfaces';
import { AwsProxyProtocolPolicyArgs, AwsProxyProtocolPolicyAttrs } from '.';

export class AwsProxyProtocolPolicy implements AwsProxyProtocolPolicyIntterface {
  name: string = 'aws_proxy_protocol_policy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html';
  groupName: string = 'EC2 Resources';
  args: AwsProxyProtocolPolicyArgs;
  attrs: AwsProxyProtocolPolicyAttrs;

}
