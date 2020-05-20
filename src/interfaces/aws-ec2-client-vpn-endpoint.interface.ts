import { AwsEc2ClientVpnEndpointArgsIntterface, AwsEc2ClientVpnEndpointAttrsIntterface } from '.';

export interface AwsEc2ClientVpnEndpointIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEc2ClientVpnEndpointArgsIntterface;
  attrs: AwsEc2ClientVpnEndpointAttrsIntterface;

}
