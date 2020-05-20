import { AwsConfigConfigurationAggregatorArgsAccountAggregationSourceIntterface } from '.';

export interface AwsConfigConfigurationAggregatorArgsIntterface {
  name: string;
  account_aggregation_source?: AwsConfigConfigurationAggregatorArgsAccountAggregationSourceIntterface;
  organization_aggregation_source?: string;
  all_regions?: string;
  regions?: string;
  role_arn: string;

}
