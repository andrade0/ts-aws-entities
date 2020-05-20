import { AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesIntterface } from '../interfaces';


export class AwsKinesisAnalyticsApplicationArgsReferenceDataSources implements AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesIntterface {
  schema: string;
  table_name: string;
  s3?: string;

}
