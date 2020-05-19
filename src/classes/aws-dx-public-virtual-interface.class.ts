import { AwsDxPublicVirtualInterfaceIntterface } from '../interfaces';
import { AwsDxPublicVirtualInterfaceArgs,  AwsDxPublicVirtualInterfaceAttrs } from '.';

export class AwsDxPublicVirtualInterface implements AwsDxPublicVirtualInterfaceIntterface {
  	name: string = 'aws_dx_public_virtual_interface';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/dx_public_virtual_interface.html';
	groupName: string = 'Direct Connect Resources';
	args: AwsDxPublicVirtualInterfaceArgs;
	attrs: AwsDxPublicVirtualInterfaceAttrs;

}
