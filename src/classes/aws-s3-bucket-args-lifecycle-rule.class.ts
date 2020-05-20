import { AwsS3BucketArgsLifecycleRuleIntterface } from '../interfaces';


export class AwsS3BucketArgsLifecycleRule implements AwsS3BucketArgsLifecycleRuleIntterface {
  id?: string;
  prefix?: string;
  tags?: string;
  enabled: string;
  abort_incomplete_multipart_upload_days?: string;
  expiration?: string;
  transition?: string;
  noncurrent_version_expiration?: string;
  noncurrent_version_transition?: string;

}
