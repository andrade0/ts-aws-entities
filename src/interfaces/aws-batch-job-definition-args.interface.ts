import { AwsBatchJobDefinitionArgsRetryStrategyIntterface, AwsBatchJobDefinitionArgsTimeoutIntterface } from '.';

export interface AwsBatchJobDefinitionArgsIntterface {
  name: string;
  container_properties?: string;
  parameters?: string;
  retry_strategy?: AwsBatchJobDefinitionArgsRetryStrategyIntterface;
  timeout?: AwsBatchJobDefinitionArgsTimeoutIntterface;
  type: string;
  arn: string;
  revision: string;

}
