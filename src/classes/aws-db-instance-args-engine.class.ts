import { AwsDbInstanceArgsEngineIntterface } from '../interfaces';


export class AwsDbInstanceArgsEngine implements AwsDbInstanceArgsEngineIntterface {
  	bucket_name: string;
	bucket_prefix?: string;
	ingestion_role: string;
	source_engine: string;
	source_engine_version: string;

}
