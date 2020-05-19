import { AwsGlueJobArgsIntterface } from '../interfaces';
import { AwsGlueJobArgsCommand,  AwsGlueJobArgsExecutionProperty } from '.';

export class AwsGlueJobArgs implements AwsGlueJobArgsIntterface {
  	allocated_capacity?: string;
	command: AwsGlueJobArgsCommand;
	connections?: string;
	default_arguments?: string;
	description?: string;
	execution_property?: AwsGlueJobArgsExecutionProperty;
	max_retries?: string;
	name: string;
	role_arn: string;
	timeout?: string;
	security_configuration?: string;

}
