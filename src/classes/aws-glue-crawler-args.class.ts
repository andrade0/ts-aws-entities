import { AwsGlueCrawlerArgsIntterface } from '../interfaces';
import {
  AwsGlueCrawlerArgsDynamodbTarget,
  AwsGlueCrawlerArgsJdbcTarget,
  AwsGlueCrawlerArgsS3Target,
  AwsGlueCrawlerArgsSchemaChangePolicy,
} from '.';

export class AwsGlueCrawlerArgs implements AwsGlueCrawlerArgsIntterface {
  database_name: string;
  name: string;
  role: string;
  classifiers?: string;
  configuration?: string;
  description?: string;
  dynamodb_target?: AwsGlueCrawlerArgsDynamodbTarget;
  jdbc_target?: AwsGlueCrawlerArgsJdbcTarget;
  s3_target?: AwsGlueCrawlerArgsS3Target;
  schedule?: string;
  schema_change_policy?: AwsGlueCrawlerArgsSchemaChangePolicy;
  table_prefix?: string;
  security_configuration?: string;

}
