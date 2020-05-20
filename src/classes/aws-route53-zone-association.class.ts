import { AwsRoute53ZoneAssociationIntterface } from '../interfaces';
import { AwsRoute53ZoneAssociationArgs, AwsRoute53ZoneAssociationAttrs } from '.';

export class AwsRoute53ZoneAssociation implements AwsRoute53ZoneAssociationIntterface {
  name: string = 'aws_route53_zone_association';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html';
  groupName: string = 'Route53 Resources';
  args: AwsRoute53ZoneAssociationArgs;
  attrs: AwsRoute53ZoneAssociationAttrs;

}
