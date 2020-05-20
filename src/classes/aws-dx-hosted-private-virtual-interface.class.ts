import { AwsDxHostedPrivateVirtualInterfaceIntterface } from '../interfaces';
import { AwsDxHostedPrivateVirtualInterfaceArgs, AwsDxHostedPrivateVirtualInterfaceAttrs } from '.';

export class AwsDxHostedPrivateVirtualInterface implements AwsDxHostedPrivateVirtualInterfaceIntterface {
  name: string = 'aws_dx_hosted_private_virtual_interface';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/dx_hosted_private_virtual_interface.html';
  groupName: string = 'Direct Connect Resources';
  args: AwsDxHostedPrivateVirtualInterfaceArgs;
  attrs: AwsDxHostedPrivateVirtualInterfaceAttrs;

}
