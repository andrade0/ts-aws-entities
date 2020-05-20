export interface AwsAlbListenerArgsPortIntterface {
  type: string;
  target_group_arn?: string;
  redirect?: string;
  fixed_response?: string;
  host?: string;
  path?: string;
  port?: string;
  protocol?: string;
  query?: string;
  status_code: string;
  content_type: string;
  message_body?: string;
  authentication_request_extra_params?: string;
  on_unauthenticated_request?: string;
  scope?: string;
  session_cookie_name?: string;
  session_timeout?: string;
  user_pool_arn: string;
  user_pool_client_id: string;
  user_pool_domain: string;
  authorization_endpoint: string;
  client_id: string;
  client_secret: string;
  issuer: string;
  token_endpoint: string;
  user_info_endpoint: string;
  key: string;
  value: string;

}
