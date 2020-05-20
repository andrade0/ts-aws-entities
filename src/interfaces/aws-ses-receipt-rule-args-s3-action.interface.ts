export interface AwsSesReceiptRuleArgsS3ActionIntterface {
  bucket_name: string;
  kms_key_arn?: string;
  object_key_prefix?: string;
  topic_arn?: string;
  position: string;

}
