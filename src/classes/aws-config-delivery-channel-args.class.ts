import { AwsConfigDeliveryChannelArgsIntterface } from '../interfaces';
import { AwsConfigDeliveryChannelArgsSnapshotDeliveryProperties } from '.';

export class AwsConfigDeliveryChannelArgs implements AwsConfigDeliveryChannelArgsIntterface {
  name?: string;
  s3_bucket_name: string;
  s3_key_prefix?: string;
  sns_topic_arn?: string;
  snapshot_delivery_properties?: AwsConfigDeliveryChannelArgsSnapshotDeliveryProperties;

}
