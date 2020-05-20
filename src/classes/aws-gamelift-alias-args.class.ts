import { AwsGameliftAliasArgsIntterface } from '../interfaces';
import { AwsGameliftAliasArgsRoutingStrategy } from '.';

export class AwsGameliftAliasArgs implements AwsGameliftAliasArgsIntterface {
  name: string;
  description?: string;
  routing_strategy: AwsGameliftAliasArgsRoutingStrategy;

}
