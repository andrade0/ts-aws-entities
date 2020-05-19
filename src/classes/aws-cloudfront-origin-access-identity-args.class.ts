import { AwsCloudfrontOriginAccessIdentityArgsIntterface } from '../interfaces';


export class AwsCloudfrontOriginAccessIdentityArgs implements AwsCloudfrontOriginAccessIdentityArgsIntterface {
  	comment?: string;
	id: string;
	caller_reference: string;
	cloudfront_access_identity_path: string;
	etag: string;
	iam_arn: string;
	s3_canonical_user_id: string;

}
