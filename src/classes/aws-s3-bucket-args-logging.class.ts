import { AwsS3BucketArgsLoggingIntterface } from '../interfaces';


export class AwsS3BucketArgsLogging implements AwsS3BucketArgsLoggingIntterface {
  target_bucket: string;
  target_prefix?: string;

}
