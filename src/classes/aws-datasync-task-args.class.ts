import { AwsDatasyncTaskArgsIntterface } from '../interfaces';
import { AwsDatasyncTaskArgsOptions } from '.';

export class AwsDatasyncTaskArgs implements AwsDatasyncTaskArgsIntterface {
  	destination_location_arn: string;
	source_location_arn: string;
	cloudwatch_log_group_arn?: string;
	name?: string;
	options?: AwsDatasyncTaskArgsOptions;
	tags?: string;
	id: string;
	arn: string;

}
