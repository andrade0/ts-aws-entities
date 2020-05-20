import { AwsGameliftGameSessionQueueArgsIntterface } from '../interfaces';
import { AwsGameliftGameSessionQueueArgsPlayerLatencyPolicy } from '.';

export class AwsGameliftGameSessionQueueArgs implements AwsGameliftGameSessionQueueArgsIntterface {
  name: string;
  timeout_in_seconds: string;
  destinations?: string;
  player_latency_policy?: AwsGameliftGameSessionQueueArgsPlayerLatencyPolicy;

}
