import { AwsEipAssociationIntterface } from '../interfaces';
import { AwsEipAssociationArgs,  AwsEipAssociationAttrs } from '.';

export class AwsEipAssociation implements AwsEipAssociationIntterface {
  	name: string = 'aws_eip_association';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/eip_association.html';
	groupName: string = 'EC2 Resources';
	args: AwsEipAssociationArgs;
	attrs: AwsEipAssociationAttrs;

}
