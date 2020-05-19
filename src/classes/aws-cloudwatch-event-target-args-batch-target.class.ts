import { AwsCloudwatchEventTargetArgsBatchTargetIntterface } from '../interfaces';


export class AwsCloudwatchEventTargetArgsBatchTarget implements AwsCloudwatchEventTargetArgsBatchTargetIntterface {
  	job_definition: string;
	job_name: string;
	array_size?: string;
	job_attempts?: string;

}
