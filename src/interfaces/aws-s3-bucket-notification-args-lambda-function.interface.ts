

export interface AwsS3BucketNotificationArgsLambdaFunctionIntterface {
  	id?: string;
	lambda_function_arn: string;
	events: string;
	filter_prefix?: string;
	filter_suffix?: string;

}
