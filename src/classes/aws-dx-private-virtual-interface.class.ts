import { AwsDxPrivateVirtualInterfaceIntterface } from '../interfaces';
import { AwsDxPrivateVirtualInterfaceArgs, AwsDxPrivateVirtualInterfaceAttrs } from '.';

export class AwsDxPrivateVirtualInterface implements AwsDxPrivateVirtualInterfaceIntterface {
  name: string = 'aws_dx_private_virtual_interface';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/dx_private_virtual_interface.html';
  groupName: string = 'Direct Connect Resources';
  args: AwsDxPrivateVirtualInterfaceArgs;
  attrs: AwsDxPrivateVirtualInterfaceAttrs;

}
