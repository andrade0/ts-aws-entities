import { AwsCloudwatchEventTargetArgsEcsTargetIntterface } from '../interfaces';


export class AwsCloudwatchEventTargetArgsEcsTarget implements AwsCloudwatchEventTargetArgsEcsTargetIntterface {
  	group?: string;
	launch_type?: string;
	network_configuration?: string;
	platform_version?: string;
	task_count?: string;
	task_definition_arn: string;

}
