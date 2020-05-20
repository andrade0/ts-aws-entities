import { AwsConfigConfigurationAggregatorArgsIntterface } from '../interfaces';
import { AwsConfigConfigurationAggregatorArgsAccountAggregationSource } from '.';

export class AwsConfigConfigurationAggregatorArgs implements AwsConfigConfigurationAggregatorArgsIntterface {
  name: string;
  account_aggregation_source?: AwsConfigConfigurationAggregatorArgsAccountAggregationSource;
  organization_aggregation_source?: string;
  all_regions?: string;
  regions?: string;
  role_arn: string;

}
