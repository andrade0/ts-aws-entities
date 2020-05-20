import { AwsCloudfrontDistributionArgsCacheBehaviorIntterface } from '../interfaces';


export class AwsCloudfrontDistributionArgsCacheBehavior implements AwsCloudfrontDistributionArgsCacheBehaviorIntterface {
  allowed_methods: string;
  cached_methods: string;
  compress?: string;
  default_ttl?: string;
  field_level_encryption_id?: string;
  forwarded_values: string;
  lambda_function_association?: string;
  max_ttl?: string;
  min_ttl?: string;
  path_pattern: string;
  smooth_streaming?: string;
  target_origin_id: string;
  trusted_signers?: string;
  viewer_protocol_policy: string;
  event_type: string;
  lambda_arn: string;
  include_body?: string;

}
