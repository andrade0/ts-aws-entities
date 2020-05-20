import {
  AwsS3BucketInventoryArgsBucketIntterface,
  AwsS3BucketInventoryArgsDestinationIntterface,
  AwsS3BucketInventoryArgsFilterIntterface,
  AwsS3BucketInventoryArgsScheduleIntterface,
  AwsS3BucketInventoryArgsSseKmsIntterface,
} from '.';

export interface AwsS3BucketInventoryArgsIntterface {
  bucket: AwsS3BucketInventoryArgsBucketIntterface;
  name: string;
  included_object_versions: string;
  schedule: AwsS3BucketInventoryArgsScheduleIntterface;
  destination: AwsS3BucketInventoryArgsDestinationIntterface;
  enabled: string;
  filter?: AwsS3BucketInventoryArgsFilterIntterface;
  optional_fields?: string;
  sse_kms?: AwsS3BucketInventoryArgsSseKmsIntterface;
  sse_s3?: string;

}
