import { AwsS3BucketPolicyArgsIntterface } from '../interfaces';


export class AwsS3BucketPolicyArgs implements AwsS3BucketPolicyArgsIntterface {
  bucket: string;
  policy: string;

}
