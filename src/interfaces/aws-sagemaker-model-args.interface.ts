import { AwsSagemakerModelArgsPrimaryContainerIntterface } from '.';

export interface AwsSagemakerModelArgsIntterface {
  	name?: string;
	primary_container?: AwsSagemakerModelArgsPrimaryContainerIntterface;
	execution_role_arn: string;
	container?: string;
	enable_network_isolation?: string;
	vpc_config?: string;
	tags?: string;

}
