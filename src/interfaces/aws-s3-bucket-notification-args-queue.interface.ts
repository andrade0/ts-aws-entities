

export interface AwsS3BucketNotificationArgsQueueIntterface {
  	id?: string;
	queue_arn: string;
	events: string;
	filter_prefix?: string;
	filter_suffix?: string;

}
