import { AwsSesReceiptRuleArgsS3ActionIntterface } from '../interfaces';


export class AwsSesReceiptRuleArgsS3Action implements AwsSesReceiptRuleArgsS3ActionIntterface {
  bucket_name: string;
  kms_key_arn?: string;
  object_key_prefix?: string;
  topic_arn?: string;
  position: string;

}
