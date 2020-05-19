import { AwsS3BucketArgsIntterface } from '../interfaces';
import { AwsS3BucketArgsTags,  AwsS3BucketArgsWebsite,  AwsS3BucketArgsVersioning,  AwsS3BucketArgsLogging,  AwsS3BucketArgsLifecycleRule,  AwsS3BucketArgsReplicationConfiguration,  AwsS3BucketArgsServerSideEncryptionConfiguration,  AwsS3BucketArgsObjectLockConfiguration,  AwsS3BucketArgsId,  AwsS3BucketArgsDestination,  AwsS3BucketArgsSourceSelectionCriteria,  AwsS3BucketArgsFilter,  AwsS3BucketArgsDefaultRetention } from '.';

export class AwsS3BucketArgs implements AwsS3BucketArgsIntterface {
  	bucket: string;
	bucket_prefix: string;
	acl?: string;
	policy?: string;
	tags?: AwsS3BucketArgsTags;
	force_destroy: string;
	website?: AwsS3BucketArgsWebsite;
	cors_rule?: string;
	versioning?: AwsS3BucketArgsVersioning;
	logging?: AwsS3BucketArgsLogging;
	lifecycle_rule?: AwsS3BucketArgsLifecycleRule;
	acceleration_status?: string;
	region?: string;
	request_payer?: string;
	replication_configuration?: AwsS3BucketArgsReplicationConfiguration;
	server_side_encryption_configuration?: AwsS3BucketArgsServerSideEncryptionConfiguration;
	object_lock_configuration?: AwsS3BucketArgsObjectLockConfiguration;
	allowed_headers?: string;
	allowed_methods: string;
	allowed_origins: string;
	expose_headers?: string;
	max_age_seconds?: string;
	date?: string;
	days?: string;
	expired_object_delete_marker?: string;
	storage_class: string;
	id?: AwsS3BucketArgsId;
	priority?: string;
	destination: AwsS3BucketArgsDestination;
	source_selection_criteria?: AwsS3BucketArgsSourceSelectionCriteria;
	prefix?: string;
	status: string;
	filter?: AwsS3BucketArgsFilter;
	enabled: boolean;
	apply_server_side_encryption_by_default: string;
	owner: string;
	default_retention: AwsS3BucketArgsDefaultRetention;

}
