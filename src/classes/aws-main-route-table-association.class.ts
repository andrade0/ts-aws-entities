import { AwsMainRouteTableAssociationIntterface } from '../interfaces';
import { AwsMainRouteTableAssociationArgs, AwsMainRouteTableAssociationAttrs } from '.';

export class AwsMainRouteTableAssociation implements AwsMainRouteTableAssociationIntterface {
  name: string = 'aws_main_route_table_association';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/main_route_table_assoc.html';
  groupName: string = 'VPC Resources';
  args: AwsMainRouteTableAssociationArgs;
  attrs: AwsMainRouteTableAssociationAttrs;

}
