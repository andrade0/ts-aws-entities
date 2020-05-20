import { AwsS3BucketPublicAccessBlockArgsIntterface } from '../interfaces';


export class AwsS3BucketPublicAccessBlockArgs implements AwsS3BucketPublicAccessBlockArgsIntterface {
  bucket: string;
  block_public_acls?: string;
  block_public_policy?: string;
  ignore_public_acls?: string;
  restrict_public_buckets?: string;
  id: string;

}
