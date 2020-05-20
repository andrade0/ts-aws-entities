import { AwsRedshiftClusterArgsLoggingIntterface } from '../interfaces';


export class AwsRedshiftClusterArgsLogging implements AwsRedshiftClusterArgsLoggingIntterface {
  enable: string;
  bucket_name: string;
  s3_key_prefix?: string;

}
