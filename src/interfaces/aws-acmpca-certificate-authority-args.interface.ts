import { AwsAcmpcaCertificateAuthorityArgsCertificateAuthorityConfigurationIntterface, AwsAcmpcaCertificateAuthorityArgsRevocationConfigurationIntterface, AwsAcmpcaCertificateAuthorityArgsIdIntterface } from '.';

export interface AwsAcmpcaCertificateAuthorityArgsIntterface {
  	certificate_authority_configuration: AwsAcmpcaCertificateAuthorityArgsCertificateAuthorityConfigurationIntterface;
	enabled?: string;
	revocation_configuration?: AwsAcmpcaCertificateAuthorityArgsRevocationConfigurationIntterface;
	tags?: string;
	type?: string;
	common_name?: string;
	country?: string;
	distinguished_name_qualifier?: string;
	generation_qualifier?: string;
	given_name?: string;
	initials?: string;
	locality?: string;
	organization?: string;
	organizational_unit?: string;
	pseudonym?: string;
	state?: string;
	surname?: string;
	title?: string;
	custom_cname?: string;
	expiration_in_days: number;
	s3_bucket_name?: string;
	id: AwsAcmpcaCertificateAuthorityArgsIdIntterface;
	arn: string;
	certificate: string;
	certificate_chain: string;
	certificate_signing_request: string;
	not_after: string;
	not_before: string;
	serial: string;
	status: string;

}
