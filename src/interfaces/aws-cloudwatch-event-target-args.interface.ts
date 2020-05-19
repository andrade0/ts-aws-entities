import { AwsCloudwatchEventTargetArgsInputIntterface, AwsCloudwatchEventTargetArgsRunCommandTargetsIntterface, AwsCloudwatchEventTargetArgsEcsTargetIntterface, AwsCloudwatchEventTargetArgsBatchTargetIntterface, AwsCloudwatchEventTargetArgsKinesisTargetIntterface, AwsCloudwatchEventTargetArgsSqsTargetIntterface } from '.';

export interface AwsCloudwatchEventTargetArgsIntterface {
  	rule: string;
	target_id?: string;
	arn: string;
	input?: AwsCloudwatchEventTargetArgsInputIntterface;
	input_path?: string;
	role_arn?: string;
	run_command_targets?: AwsCloudwatchEventTargetArgsRunCommandTargetsIntterface;
	ecs_target?: AwsCloudwatchEventTargetArgsEcsTargetIntterface;
	batch_target?: AwsCloudwatchEventTargetArgsBatchTargetIntterface;
	kinesis_target?: AwsCloudwatchEventTargetArgsKinesisTargetIntterface;
	sqs_target?: AwsCloudwatchEventTargetArgsSqsTargetIntterface;
	input_transformer?: string;
	subnets: string;
	security_groups?: string;
	assign_public_ip?: string;

}
