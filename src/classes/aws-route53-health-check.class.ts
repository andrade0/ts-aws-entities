import { AwsRoute53HealthCheckIntterface } from '../interfaces';
import { AwsRoute53HealthCheckArgs, AwsRoute53HealthCheckAttrs } from '.';

export class AwsRoute53HealthCheck implements AwsRoute53HealthCheckIntterface {
  name: string = 'aws_route53_health_check';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/route53_health_check.html';
  groupName: string = 'Route53 Resources';
  args: AwsRoute53HealthCheckArgs;
  attrs: AwsRoute53HealthCheckAttrs;

}
