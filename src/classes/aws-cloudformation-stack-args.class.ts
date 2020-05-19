import { AwsCloudformationStackArgsIntterface } from '../interfaces';


export class AwsCloudformationStackArgs implements AwsCloudformationStackArgsIntterface {
  	name: string;
	template_body?: string;
	template_url?: string;
	capabilities?: string;
	disable_rollback?: string;
	notification_arns?: string;
	on_failure?: string;
	parameters?: string;
	policy_body?: string;
	policy_url?: string;
	tags?: string;
	iam_role_arn?: string;
	timeout_in_minutes?: string;

}
