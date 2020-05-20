import { AwsS3BucketArgsFilterIntterface } from '../interfaces';


export class AwsS3BucketArgsFilter implements AwsS3BucketArgsFilterIntterface {
  prefix?: string;
  tags?: string;

}
