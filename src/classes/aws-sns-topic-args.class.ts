import { AwsSnsTopicArgsIntterface } from '../interfaces';


export class AwsSnsTopicArgs implements AwsSnsTopicArgsIntterface {
  name?: string;
  name_prefix?: string;
  display_name?: string;
  policy?: string;
  delivery_policy?: string;
  application_success_feedback_role_arn?: string;
  application_success_feedback_sample_rate?: string;
  application_failure_feedback_role_arn?: string;
  http_success_feedback_role_arn?: string;
  http_success_feedback_sample_rate?: string;
  http_failure_feedback_role_arn?: string;
  kms_master_key_id?: string;
  lambda_success_feedback_role_arn?: string;
  lambda_success_feedback_sample_rate?: string;
  lambda_failure_feedback_role_arn?: string;
  sqs_success_feedback_role_arn?: string;
  sqs_success_feedback_sample_rate?: string;
  sqs_failure_feedback_role_arn?: string;

}
