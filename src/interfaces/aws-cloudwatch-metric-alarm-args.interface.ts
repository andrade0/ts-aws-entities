import { AwsCloudwatchMetricAlarmArgsMetricQueryIntterface } from '.';

export interface AwsCloudwatchMetricAlarmArgsIntterface {
  alarm_name: string;
  arn: string;
  comparison_operator: string;
  evaluation_periods: string;
  metric_name?: string;
  namespace?: string;
  period?: string;
  statistic?: string;
  threshold: string;
  actions_enabled?: string;
  alarm_actions?: number;
  alarm_description?: string;
  datapoints_to_alarm?: string;
  dimensions?: string;
  insufficient_data_actions?: number;
  ok_actions?: number;
  unit?: string;
  extended_statistic?: string;
  treat_missing_data?: string;
  evaluate_low_sample_count_percentiles?: string;
  metric_query?: AwsCloudwatchMetricAlarmArgsMetricQueryIntterface;
  stat: string;

}
