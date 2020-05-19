import { AwsRdsClusterArgsEngineIntterface } from '../interfaces';


export class AwsRdsClusterArgsEngine implements AwsRdsClusterArgsEngineIntterface {
  	auto_pause?: string;
	max_capacity?: string;
	min_capacity?: string;
	seconds_until_auto_pause?: string;

}
