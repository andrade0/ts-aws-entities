import { AwsMacieMemberAccountAssociationIntterface } from '../interfaces';
import { AwsMacieMemberAccountAssociationArgs,  AwsMacieMemberAccountAssociationAttrs } from '.';

export class AwsMacieMemberAccountAssociation implements AwsMacieMemberAccountAssociationIntterface {
  	name: string = 'aws_macie_member_account_association';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/macie_member_account_association.html';
	groupName: string = 'Macie Resources';
	args: AwsMacieMemberAccountAssociationArgs;
	attrs: AwsMacieMemberAccountAssociationAttrs;

}
