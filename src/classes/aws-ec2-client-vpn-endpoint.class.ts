import { AwsEc2ClientVpnEndpointIntterface } from '../interfaces';
import { AwsEc2ClientVpnEndpointArgs, AwsEc2ClientVpnEndpointAttrs } from '.';

export class AwsEc2ClientVpnEndpoint implements AwsEc2ClientVpnEndpointIntterface {
  name: string = 'aws_ec2_client_vpn_endpoint';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_endpoint.html';
  groupName: string = 'EC2 Resources';
  args: AwsEc2ClientVpnEndpointArgs;
  attrs: AwsEc2ClientVpnEndpointAttrs;

}
