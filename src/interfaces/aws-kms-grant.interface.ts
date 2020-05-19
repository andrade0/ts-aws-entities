import { AwsKmsGrantArgsIntterface, AwsKmsGrantAttrsIntterface } from '.';

export interface AwsKmsGrantIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsKmsGrantArgsIntterface;
	attrs: AwsKmsGrantAttrsIntterface;

}
