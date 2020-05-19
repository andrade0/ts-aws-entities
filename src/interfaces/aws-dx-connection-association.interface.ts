import { AwsDxConnectionAssociationArgsIntterface, AwsDxConnectionAssociationAttrsIntterface } from '.';

export interface AwsDxConnectionAssociationIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsDxConnectionAssociationArgsIntterface;
	attrs: AwsDxConnectionAssociationAttrsIntterface;

}
