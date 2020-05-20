import { AwsDxGatewayAssociationIntterface } from '../interfaces';
import { AwsDxGatewayAssociationArgs, AwsDxGatewayAssociationAttrs } from '.';

export class AwsDxGatewayAssociation implements AwsDxGatewayAssociationIntterface {
  name: string = 'aws_dx_gateway_association';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html';
  groupName: string = 'Direct Connect Resources';
  args: AwsDxGatewayAssociationArgs;
  attrs: AwsDxGatewayAssociationAttrs;

}
