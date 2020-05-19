import { AwsS3BucketNotificationArgsLambdaFunctionIntterface } from '../interfaces';


export class AwsS3BucketNotificationArgsLambdaFunction implements AwsS3BucketNotificationArgsLambdaFunctionIntterface {
  	id?: string;
	lambda_function_arn: string;
	events: string;
	filter_prefix?: string;
	filter_suffix?: string;

}
