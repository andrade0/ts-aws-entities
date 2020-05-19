import { AwsSecurityhubAccountArgsIntterface, AwsSecurityhubAccountAttrsIntterface } from '.';

export interface AwsSecurityhubAccountIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSecurityhubAccountArgsIntterface;
	attrs: AwsSecurityhubAccountAttrsIntterface;

}
