import { AwsSagemakerModelArgsIntterface } from '../interfaces';
import { AwsSagemakerModelArgsPrimaryContainer } from '.';

export class AwsSagemakerModelArgs implements AwsSagemakerModelArgsIntterface {
  	name?: string;
	primary_container?: AwsSagemakerModelArgsPrimaryContainer;
	execution_role_arn: string;
	container?: string;
	enable_network_isolation?: string;
	vpc_config?: string;
	tags?: string;

}
