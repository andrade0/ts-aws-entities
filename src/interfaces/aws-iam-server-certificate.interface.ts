import { AwsIamServerCertificateArgsIntterface, AwsIamServerCertificateAttrsIntterface } from '.';

export interface AwsIamServerCertificateIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsIamServerCertificateArgsIntterface;
	attrs: AwsIamServerCertificateAttrsIntterface;

}
