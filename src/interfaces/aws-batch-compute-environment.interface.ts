import { AwsBatchComputeEnvironmentArgsIntterface, AwsBatchComputeEnvironmentAttrsIntterface } from '.';

export interface AwsBatchComputeEnvironmentIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsBatchComputeEnvironmentArgsIntterface;
  attrs: AwsBatchComputeEnvironmentAttrsIntterface;

}
