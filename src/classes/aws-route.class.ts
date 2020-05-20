import { AwsRouteIntterface } from '../interfaces';
import { AwsRouteArgs, AwsRouteAttrs } from '.';

export class AwsRoute implements AwsRouteIntterface {
  name: string = 'aws_route';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/route.html';
  groupName: string = 'VPC Resources';
  args: AwsRouteArgs;
  attrs: AwsRouteAttrs;

}
