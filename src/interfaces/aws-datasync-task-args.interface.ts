import { AwsDatasyncTaskArgsOptionsIntterface } from '.';

export interface AwsDatasyncTaskArgsIntterface {
  destination_location_arn: string;
  source_location_arn: string;
  cloudwatch_log_group_arn?: string;
  name?: string;
  options?: AwsDatasyncTaskArgsOptionsIntterface;
  tags?: string;
  id: string;
  arn: string;

}
