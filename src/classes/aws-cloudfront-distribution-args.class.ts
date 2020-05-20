import { AwsCloudfrontDistributionArgsIntterface } from '../interfaces';
import {
  AwsCloudfrontDistributionArgsCacheBehavior,
  AwsCloudfrontDistributionArgsCookies,
  AwsCloudfrontDistributionArgsCustomErrorResponse,
  AwsCloudfrontDistributionArgsLoggingConfig,
  AwsCloudfrontDistributionArgsOrigin,
  AwsCloudfrontDistributionArgsViewerCertificate,
} from '.';

export class AwsCloudfrontDistributionArgs implements AwsCloudfrontDistributionArgsIntterface {
  aliases?: string;
  cache_behavior?: AwsCloudfrontDistributionArgsCacheBehavior;
  ordered_cache_behavior?: string;
  comment?: string;
  custom_error_response?: AwsCloudfrontDistributionArgsCustomErrorResponse;
  default_cache_behavior: string;
  default_root_object?: string;
  enabled: string;
  is_ipv6_enabled?: string;
  http_version?: string;
  logging_config?: AwsCloudfrontDistributionArgsLoggingConfig;
  origin: AwsCloudfrontDistributionArgsOrigin;
  price_class?: string;
  restrictions: string;
  tags?: string;
  viewer_certificate: AwsCloudfrontDistributionArgsViewerCertificate;
  web_acl_id?: string;
  retain_on_delete?: string;
  cookies: AwsCloudfrontDistributionArgsCookies;
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
