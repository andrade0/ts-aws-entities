import { AwsIamSamlProviderArgsIntterface, AwsIamSamlProviderAttrsIntterface } from '.';

export interface AwsIamSamlProviderIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsIamSamlProviderArgsIntterface;
	attrs: AwsIamSamlProviderAttrsIntterface;

}
