import { AwsSsmAssociationIntterface } from '../interfaces';
import { AwsSsmAssociationArgs, AwsSsmAssociationAttrs } from '.';

export class AwsSsmAssociation implements AwsSsmAssociationIntterface {
  name: string = 'aws_ssm_association';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ssm_association.html';
  groupName: string = 'SSM Resources';
  args: AwsSsmAssociationArgs;
  attrs: AwsSsmAssociationAttrs;

}
