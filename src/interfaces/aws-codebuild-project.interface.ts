import { AwsCodebuildProjectArgsIntterface, AwsCodebuildProjectAttrsIntterface } from '.';

export interface AwsCodebuildProjectIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCodebuildProjectArgsIntterface;
	attrs: AwsCodebuildProjectAttrsIntterface;

}
