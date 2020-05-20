import { AwsDxGatewayIntterface } from '../interfaces';
import { AwsDxGatewayArgs, AwsDxGatewayAttrs } from '.';

export class AwsDxGateway implements AwsDxGatewayIntterface {
  name: string = 'aws_dx_gateway';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/dx_gateway.html';
  groupName: string = 'Direct Connect Resources';
  args: AwsDxGatewayArgs;
  attrs: AwsDxGatewayAttrs;

}
