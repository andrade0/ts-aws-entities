import { AwsEcsTaskDefinitionArgsIntterface, AwsEcsTaskDefinitionAttrsIntterface } from '.';

export interface AwsEcsTaskDefinitionIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsEcsTaskDefinitionArgsIntterface;
	attrs: AwsEcsTaskDefinitionAttrsIntterface;

}
