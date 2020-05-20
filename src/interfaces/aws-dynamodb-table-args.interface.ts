import {
  AwsDynamodbTableArgsAttributeIntterface,
  AwsDynamodbTableArgsGlobalSecondaryIndexIntterface,
  AwsDynamodbTableArgsLocalSecondaryIndexIntterface,
  AwsDynamodbTableArgsPointInTimeRecoveryIntterface,
  AwsDynamodbTableArgsServerSideEncryptionIntterface,
  AwsDynamodbTableArgsTtlIntterface,
} from '.';

export interface AwsDynamodbTableArgsIntterface {
  name: string;
  billing_mode?: string;
  hash_key: string;
  range_key: string;
  write_capacity?: string;
  read_capacity?: string;
  attribute: AwsDynamodbTableArgsAttributeIntterface;
  ttl?: AwsDynamodbTableArgsTtlIntterface;
  local_secondary_index: AwsDynamodbTableArgsLocalSecondaryIndexIntterface;
  global_secondary_index?: AwsDynamodbTableArgsGlobalSecondaryIndexIntterface;
  stream_enabled?: string;
  stream_view_type?: string;
  server_side_encryption?: AwsDynamodbTableArgsServerSideEncryptionIntterface;
  tags?: string;
  point_in_time_recovery?: AwsDynamodbTableArgsPointInTimeRecoveryIntterface;
  create: string;
  update: string;
  delete: string;

}
