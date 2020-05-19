

export interface AwsKinesisFirehoseDeliveryStreamArgsS3ConfigurationIntterface {
  	role_arn: string;
	bucket_arn: string;
	prefix?: string;
	buffer_size?: string;
	buffer_interval?: string;
	compression_format?: string;
	kms_key_arn?: string;
	cloudwatch_logging_options?: string;
	data_format_conversion_configuration?: string;
	error_output_prefix?: string;
	processing_configuration?: string;
	s3_backup_mode?: string;
	s3_backup_configuration?: string;

}
