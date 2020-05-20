import { AwsDaxSubnetGroupIntterface } from '../interfaces';
import { AwsDaxSubnetGroupArgs, AwsDaxSubnetGroupAttrs } from '.';

export class AwsDaxSubnetGroup implements AwsDaxSubnetGroupIntterface {
  name: string = 'aws_dax_subnet_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/dax_subnet_group.html';
  groupName: string = 'DynamoDB Accelerator Resources';
  args: AwsDaxSubnetGroupArgs;
  attrs: AwsDaxSubnetGroupAttrs;

}
