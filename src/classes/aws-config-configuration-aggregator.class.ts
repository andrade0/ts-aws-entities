import { AwsConfigConfigurationAggregatorIntterface } from '../interfaces';
import { AwsConfigConfigurationAggregatorArgs, AwsConfigConfigurationAggregatorAttrs } from '.';

export class AwsConfigConfigurationAggregator implements AwsConfigConfigurationAggregatorIntterface {
  name: string = 'aws_config_configuration_aggregator';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html';
  groupName: string = 'Config Resources';
  args: AwsConfigConfigurationAggregatorArgs;
  attrs: AwsConfigConfigurationAggregatorAttrs;

}
