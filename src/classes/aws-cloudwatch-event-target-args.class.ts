import { AwsCloudwatchEventTargetArgsIntterface } from '../interfaces';
import { AwsCloudwatchEventTargetArgsInput,  AwsCloudwatchEventTargetArgsRunCommandTargets,  AwsCloudwatchEventTargetArgsEcsTarget,  AwsCloudwatchEventTargetArgsBatchTarget,  AwsCloudwatchEventTargetArgsKinesisTarget,  AwsCloudwatchEventTargetArgsSqsTarget } from '.';

export class AwsCloudwatchEventTargetArgs implements AwsCloudwatchEventTargetArgsIntterface {
  	rule: string;
	target_id?: string;
	arn: string;
	input?: AwsCloudwatchEventTargetArgsInput;
	input_path?: string;
	role_arn?: string;
	run_command_targets?: AwsCloudwatchEventTargetArgsRunCommandTargets;
	ecs_target?: AwsCloudwatchEventTargetArgsEcsTarget;
	batch_target?: AwsCloudwatchEventTargetArgsBatchTarget;
	kinesis_target?: AwsCloudwatchEventTargetArgsKinesisTarget;
	sqs_target?: AwsCloudwatchEventTargetArgsSqsTarget;
	input_transformer?: string;
	subnets: string;
	security_groups?: string;
	assign_public_ip?: string;

}
