import { AwsBatchJobDefinitionArgsIntterface, AwsBatchJobDefinitionAttrsIntterface } from '.';

export interface AwsBatchJobDefinitionIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsBatchJobDefinitionArgsIntterface;
	attrs: AwsBatchJobDefinitionAttrsIntterface;

}
