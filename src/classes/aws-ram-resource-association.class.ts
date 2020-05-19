import { AwsRamResourceAssociationIntterface } from '../interfaces';
import { AwsRamResourceAssociationArgs,  AwsRamResourceAssociationAttrs } from '.';

export class AwsRamResourceAssociation implements AwsRamResourceAssociationIntterface {
  	name: string = 'aws_ram_resource_association';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ram_resource_association.html';
	groupName: string = 'RAM Resources';
	args: AwsRamResourceAssociationArgs;
	attrs: AwsRamResourceAssociationAttrs;

}
