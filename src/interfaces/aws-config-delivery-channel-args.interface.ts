import { AwsConfigDeliveryChannelArgsSnapshotDeliveryPropertiesIntterface } from '.';

export interface AwsConfigDeliveryChannelArgsIntterface {
  	name?: string;
	s3_bucket_name: string;
	s3_key_prefix?: string;
	sns_topic_arn?: string;
	snapshot_delivery_properties?: AwsConfigDeliveryChannelArgsSnapshotDeliveryPropertiesIntterface;

}
