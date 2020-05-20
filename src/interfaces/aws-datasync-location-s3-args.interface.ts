import { AwsDatasyncLocationS3ArgsS3ConfigIntterface } from '.';

export interface AwsDatasyncLocationS3ArgsIntterface {
  s3_bucket_arn: string;
  s3_config: AwsDatasyncLocationS3ArgsS3ConfigIntterface;
  subdirectory: string;
  tags?: string;
  id: string;
  arn: string;

}
