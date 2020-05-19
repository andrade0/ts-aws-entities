import { AwsEc2ClientVpnNetworkAssociationIntterface } from '../interfaces';
import { AwsEc2ClientVpnNetworkAssociationArgs,  AwsEc2ClientVpnNetworkAssociationAttrs } from '.';

export class AwsEc2ClientVpnNetworkAssociation implements AwsEc2ClientVpnNetworkAssociationIntterface {
  	name: string = 'aws_ec2_client_vpn_network_association';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association.html';
	groupName: string = 'EC2 Resources';
	args: AwsEc2ClientVpnNetworkAssociationArgs;
	attrs: AwsEc2ClientVpnNetworkAssociationAttrs;

}
