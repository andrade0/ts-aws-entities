export interface AwsSqsQueueArgsIntterface {
  name?: string;
  name_prefix?: string;
  visibility_timeout_seconds?: string;
  message_retention_seconds?: string;
  max_message_size?: string;
  delay_seconds?: string;
  receive_wait_time_seconds?: string;
  policy?: string;
  redrive_policy?: string;
  fifo_queue?: boolean;
  content_based_deduplication?: string;
  kms_master_key_id?: string;
  kms_data_key_reuse_period_seconds?: string;
  tags?: string;

}
