import { AwsDxHostedPublicVirtualInterfaceAccepterIntterface } from '../interfaces';
import { AwsDxHostedPublicVirtualInterfaceAccepterArgs, AwsDxHostedPublicVirtualInterfaceAccepterAttrs } from '.';

export class AwsDxHostedPublicVirtualInterfaceAccepter implements AwsDxHostedPublicVirtualInterfaceAccepterIntterface {
  name: string = 'aws_dx_hosted_public_virtual_interface_accepter';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html';
  groupName: string = 'Direct Connect Resources';
  args: AwsDxHostedPublicVirtualInterfaceAccepterArgs;
  attrs: AwsDxHostedPublicVirtualInterfaceAccepterAttrs;

}
