import { AwsRdsClusterArgsPortIntterface } from '../interfaces';


export class AwsRdsClusterArgsPort implements AwsRdsClusterArgsPortIntterface {
  bucket_name: string;
  bucket_prefix?: string;
  ingestion_role: string;
  source_engine: string;
  source_engine_version: string;

}
