import { AwsAcmpcaCertificateAuthorityArgsIntterface } from '../interfaces';
import { AwsAcmpcaCertificateAuthorityArgsCertificateAuthorityConfiguration,  AwsAcmpcaCertificateAuthorityArgsRevocationConfiguration,  AwsAcmpcaCertificateAuthorityArgsId } from '.';

export class AwsAcmpcaCertificateAuthorityArgs implements AwsAcmpcaCertificateAuthorityArgsIntterface {
  	certificate_authority_configuration: AwsAcmpcaCertificateAuthorityArgsCertificateAuthorityConfiguration;
	enabled?: string;
	revocation_configuration?: AwsAcmpcaCertificateAuthorityArgsRevocationConfiguration;
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
	id: AwsAcmpcaCertificateAuthorityArgsId;
	arn: string;
	certificate: string;
	certificate_chain: string;
	certificate_signing_request: string;
	not_after: string;
	not_before: string;
	serial: string;
	status: string;

}
