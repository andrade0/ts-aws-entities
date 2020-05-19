import { AwsAcmCertificateArgsDomainNameIntterface, AwsAcmCertificateArgsPrivateKeyIntterface } from '.';

export interface AwsAcmCertificateArgsIntterface {
  	domain_name?: AwsAcmCertificateArgsDomainNameIntterface;
	private_key?: AwsAcmCertificateArgsPrivateKeyIntterface;
	tags?: string;

}
