import { AwsDxHostedPrivateVirtualInterfaceAccepterIntterface } from '../interfaces';
import { AwsDxHostedPrivateVirtualInterfaceAccepterArgs, AwsDxHostedPrivateVirtualInterfaceAccepterAttrs } from '.';

export class AwsDxHostedPrivateVirtualInterfaceAccepter implements AwsDxHostedPrivateVirtualInterfaceAccepterIntterface {
  name: string = 'aws_dx_hosted_private_virtual_interface_accepter';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface_accepter.html';
  groupName: string = 'Direct Connect Resources';
  args: AwsDxHostedPrivateVirtualInterfaceAccepterArgs;
  attrs: AwsDxHostedPrivateVirtualInterfaceAccepterAttrs;

}
