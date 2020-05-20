import { AwsDxHostedPublicVirtualInterfaceIntterface } from '../interfaces';
import { AwsDxHostedPublicVirtualInterfaceArgs, AwsDxHostedPublicVirtualInterfaceAttrs } from '.';

export class AwsDxHostedPublicVirtualInterface implements AwsDxHostedPublicVirtualInterfaceIntterface {
  name: string = 'aws_dx_hosted_public_virtual_interface';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface.html';
  groupName: string = 'Direct Connect Resources';
  args: AwsDxHostedPublicVirtualInterfaceArgs;
  attrs: AwsDxHostedPublicVirtualInterfaceAttrs;

}
