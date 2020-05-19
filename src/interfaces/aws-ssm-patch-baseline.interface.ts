import { AwsSsmPatchBaselineArgsIntterface, AwsSsmPatchBaselineAttrsIntterface } from '.';

export interface AwsSsmPatchBaselineIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSsmPatchBaselineArgsIntterface;
	attrs: AwsSsmPatchBaselineAttrsIntterface;

}
