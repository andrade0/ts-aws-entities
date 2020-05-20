import { AwsDatasyncLocationS3ArgsIntterface } from '../interfaces';
import { AwsDatasyncLocationS3ArgsS3Config } from '.';

export class AwsDatasyncLocationS3Args implements AwsDatasyncLocationS3ArgsIntterface {
  s3_bucket_arn: string;
  s3_config: AwsDatasyncLocationS3ArgsS3Config;
  subdirectory: string;
  tags?: string;
  id: string;
  arn: string;

}
