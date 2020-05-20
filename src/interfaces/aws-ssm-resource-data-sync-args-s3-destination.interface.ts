export interface AwsSsmResourceDataSyncArgsS3DestinationIntterface {
  bucket_name: string;
  region: string;
  kms_key_arn?: string;
  prefix?: string;
  sync_format?: string;

}
