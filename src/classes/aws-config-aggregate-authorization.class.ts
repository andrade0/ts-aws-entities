import { AwsConfigAggregateAuthorizationIntterface } from '../interfaces';
import { AwsConfigAggregateAuthorizationArgs, AwsConfigAggregateAuthorizationAttrs } from '.';

export class AwsConfigAggregateAuthorization implements AwsConfigAggregateAuthorizationIntterface {
  name: string = 'aws_config_aggregate_authorization';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html';
  groupName: string = 'Config Resources';
  args: AwsConfigAggregateAuthorizationArgs;
  attrs: AwsConfigAggregateAuthorizationAttrs;

}
