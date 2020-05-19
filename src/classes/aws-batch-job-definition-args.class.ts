import { AwsBatchJobDefinitionArgsIntterface } from '../interfaces';
import { AwsBatchJobDefinitionArgsRetryStrategy,  AwsBatchJobDefinitionArgsTimeout } from '.';

export class AwsBatchJobDefinitionArgs implements AwsBatchJobDefinitionArgsIntterface {
  	name: string;
	container_properties?: string;
	parameters?: string;
	retry_strategy?: AwsBatchJobDefinitionArgsRetryStrategy;
	timeout?: AwsBatchJobDefinitionArgsTimeout;
	type: string;
	arn: string;
	revision: string;

}
