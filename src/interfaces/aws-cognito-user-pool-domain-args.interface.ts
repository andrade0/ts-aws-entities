export interface AwsCognitoUserPoolDomainArgsIntterface {
  domain: string;
  user_pool_id: string;
  certificate_arn?: string;
  aws_account_id: string;
  cloudfront_distribution_arn: string;
  s3_bucket: string;
  version: string;

}
