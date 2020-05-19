import { AwsDxConnectionAssociationIntterface } from '../interfaces';
import { AwsDxConnectionAssociationArgs,  AwsDxConnectionAssociationAttrs } from '.';

export class AwsDxConnectionAssociation implements AwsDxConnectionAssociationIntterface {
  	name: string = 'aws_dx_connection_association';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/dx_connection_association.html';
	groupName: string = 'Direct Connect Resources';
	args: AwsDxConnectionAssociationArgs;
	attrs: AwsDxConnectionAssociationAttrs;

}
