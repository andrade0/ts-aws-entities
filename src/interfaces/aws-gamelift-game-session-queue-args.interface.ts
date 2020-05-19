import { AwsGameliftGameSessionQueueArgsPlayerLatencyPolicyIntterface } from '.';

export interface AwsGameliftGameSessionQueueArgsIntterface {
  	name: string;
	timeout_in_seconds: string;
	destinations?: string;
	player_latency_policy?: AwsGameliftGameSessionQueueArgsPlayerLatencyPolicyIntterface;

}
