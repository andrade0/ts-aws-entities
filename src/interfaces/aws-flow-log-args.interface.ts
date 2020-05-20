export interface AwsFlowLogArgsIntterface {
  traffic_type: string;
  eni_id?: string;
  iam_role_arn?: string;
  log_destination_type?: string;
  log_destination?: string;
  log_group_name?: string;
  subnet_id?: string;
  vpc_id?: string;

}
