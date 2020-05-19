

export interface AwsS3BucketObjectArgsIntterface {
  	bucket: string;
	key: string;
	source: string;
	content: string;
	content_base64: string;
	acl?: string;
	cache_control?: string;
	content_disposition?: string;
	content_encoding?: string;
	content_language?: string;
	content_type?: string;
	website_redirect?: string;
	storage_class?: string;
	etag?: string;
	server_side_encryption?: string;
	kms_key_id?: string;
	tags?: string;

}
