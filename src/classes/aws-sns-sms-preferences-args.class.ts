import { AwsSnsSmsPreferencesArgsIntterface } from '../interfaces';


export class AwsSnsSmsPreferencesArgs implements AwsSnsSmsPreferencesArgsIntterface {
  	monthly_spend_limit?: string;
	delivery_status_iam_role_arn?: string;
	delivery_status_success_sampling_rate?: string;
	default_sender_id?: string;
	default_sms_type?: string;
	usage_report_s3_bucket?: string;

}
