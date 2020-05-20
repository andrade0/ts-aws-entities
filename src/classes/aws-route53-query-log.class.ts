import { AwsRoute53QueryLogIntterface } from '../interfaces';
import { AwsRoute53QueryLogArgs, AwsRoute53QueryLogAttrs } from '.';

export class AwsRoute53QueryLog implements AwsRoute53QueryLogIntterface {
  name: string = 'aws_route53_query_log';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/route53_query_log.html';
  groupName: string = 'Route53 Resources';
  args: AwsRoute53QueryLogArgs;
  attrs: AwsRoute53QueryLogAttrs;

}
