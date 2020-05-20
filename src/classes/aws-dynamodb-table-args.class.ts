import { AwsDynamodbTableArgsIntterface } from '../interfaces';
import {
  AwsDynamodbTableArgsAttribute,
  AwsDynamodbTableArgsGlobalSecondaryIndex,
  AwsDynamodbTableArgsLocalSecondaryIndex,
  AwsDynamodbTableArgsPointInTimeRecovery,
  AwsDynamodbTableArgsServerSideEncryption,
  AwsDynamodbTableArgsTtl,
} from '.';

export class AwsDynamodbTableArgs implements AwsDynamodbTableArgsIntterface {
  name: string;
  billing_mode?: string;
  hash_key: string;
  range_key: string;
  write_capacity?: string;
  read_capacity?: string;
  attribute: AwsDynamodbTableArgsAttribute;
  ttl?: AwsDynamodbTableArgsTtl;
  local_secondary_index: AwsDynamodbTableArgsLocalSecondaryIndex;
  global_secondary_index?: AwsDynamodbTableArgsGlobalSecondaryIndex;
  stream_enabled?: string;
  stream_view_type?: string;
  server_side_encryption?: AwsDynamodbTableArgsServerSideEncryption;
  tags?: string;
  point_in_time_recovery?: AwsDynamodbTableArgsPointInTimeRecovery;
  create: string;
  update: string;
  delete: string;

}
