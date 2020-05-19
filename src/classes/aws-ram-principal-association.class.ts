import { AwsRamPrincipalAssociationIntterface } from '../interfaces';
import { AwsRamPrincipalAssociationArgs,  AwsRamPrincipalAssociationAttrs } from '.';

export class AwsRamPrincipalAssociation implements AwsRamPrincipalAssociationIntterface {
  	name: string = 'aws_ram_principal_association';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ram_principal_association.html';
	groupName: string = 'RAM Resources';
	args: AwsRamPrincipalAssociationArgs;
	attrs: AwsRamPrincipalAssociationAttrs;

}
