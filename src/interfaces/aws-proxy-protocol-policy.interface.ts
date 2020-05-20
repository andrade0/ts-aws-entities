import { AwsProxyProtocolPolicyArgsIntterface, AwsProxyProtocolPolicyAttrsIntterface } from '.';

export interface AwsProxyProtocolPolicyIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsProxyProtocolPolicyArgsIntterface;
  attrs: AwsProxyProtocolPolicyAttrsIntterface;

}
