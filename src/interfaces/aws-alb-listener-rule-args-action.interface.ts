

export interface AwsAlbListenerRuleArgsActionIntterface {
  	type: string;
	target_group_arn?: string;
	redirect?: string;
	fixed_response?: string;
	authenticate_cognito?: string;
	authenticate_oidc?: string;

}
