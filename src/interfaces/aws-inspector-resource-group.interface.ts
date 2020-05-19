import { AwsInspectorResourceGroupArgsIntterface, AwsInspectorResourceGroupAttrsIntterface } from '.';

export interface AwsInspectorResourceGroupIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsInspectorResourceGroupArgsIntterface;
	attrs: AwsInspectorResourceGroupAttrsIntterface;

}
