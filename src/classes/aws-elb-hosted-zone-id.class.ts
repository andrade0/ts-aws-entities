import { AwsElbHostedZoneIdIntterface } from '../interfaces';
import { AwsElbHostedZoneIdArgs, AwsElbHostedZoneIdAttrs } from '.';

export class AwsElbHostedZoneId implements AwsElbHostedZoneIdIntterface {
  name: string = 'aws_elb_hosted_zone_id';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/elb_hosted_zone_id.html';
  groupName: string = 'Data Sources';
  args: AwsElbHostedZoneIdArgs;
  attrs: AwsElbHostedZoneIdAttrs;

}
