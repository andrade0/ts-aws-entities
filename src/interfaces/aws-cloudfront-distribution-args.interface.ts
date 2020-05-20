import {
  AwsCloudfrontDistributionArgsCacheBehaviorIntterface,
  AwsCloudfrontDistributionArgsCookiesIntterface,
  AwsCloudfrontDistributionArgsCustomErrorResponseIntterface,
  AwsCloudfrontDistributionArgsLoggingConfigIntterface,
  AwsCloudfrontDistributionArgsOriginIntterface,
  AwsCloudfrontDistributionArgsViewerCertificateIntterface,
} from '.';

export interface AwsCloudfrontDistributionArgsIntterface {
  aliases?: string;
  cache_behavior?: AwsCloudfrontDistributionArgsCacheBehaviorIntterface;
  ordered_cache_behavior?: string;
  comment?: string;
  custom_error_response?: AwsCloudfrontDistributionArgsCustomErrorResponseIntterface;
  default_cache_behavior: string;
  default_root_object?: string;
  enabled: string;
  is_ipv6_enabled?: string;
  http_version?: string;
  logging_config?: AwsCloudfrontDistributionArgsLoggingConfigIntterface;
  origin: AwsCloudfrontDistributionArgsOriginIntterface;
  price_class?: string;
  restrictions: string;
  tags?: string;
  viewer_certificate: AwsCloudfrontDistributionArgsViewerCertificateIntterface;
  web_acl_id?: string;
  retain_on_delete?: string;
  cookies: AwsCloudfrontDistributionArgsCookiesIntterface;
  headers?: string;
  query_string: string;
  query_string_cache_keys?: string;
  locations?: string;
  restriction_type: string;
  id: string;
  arn: string;
  caller_reference: string;
  status: string;
  active_trusted_signers: string;
  domain_name: string;
  last_modified_time: string;
  in_progress_validation_batches: string;
  etag: string;
  hosted_zone_id: string;

}
