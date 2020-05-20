import { AwsS3BucketMetricArgsIntterface } from '../interfaces';
import { AwsS3BucketMetricArgsFilter } from '.';

export class AwsS3BucketMetricArgs implements AwsS3BucketMetricArgsIntterface {
  bucket: string;
  name: string;
  filter?: AwsS3BucketMetricArgsFilter;

}
