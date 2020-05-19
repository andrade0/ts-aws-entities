import { AwsGlueJobArgsCommandIntterface, AwsGlueJobArgsExecutionPropertyIntterface } from '.';

export interface AwsGlueJobArgsIntterface {
  	allocated_capacity?: string;
	command: AwsGlueJobArgsCommandIntterface;
	connections?: string;
	default_arguments?: string;
	description?: string;
	execution_property?: AwsGlueJobArgsExecutionPropertyIntterface;
	max_retries?: string;
	name: string;
	role_arn: string;
	timeout?: string;
	security_configuration?: string;

}
