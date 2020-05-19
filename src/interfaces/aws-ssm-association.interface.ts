import { AwsSsmAssociationArgsIntterface, AwsSsmAssociationAttrsIntterface } from '.';

export interface AwsSsmAssociationIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSsmAssociationArgsIntterface;
	attrs: AwsSsmAssociationAttrsIntterface;

}
