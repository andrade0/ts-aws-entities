import { AwsGlueTriggerArgsActionsIntterface, AwsGlueTriggerArgsPredicateIntterface } from '.';

export interface AwsGlueTriggerArgsIntterface {
  actions: AwsGlueTriggerArgsActionsIntterface;
  description?: string;
  enabled?: string;
  name: string;
  predicate?: AwsGlueTriggerArgsPredicateIntterface;
  schedule?: string;
  type: string;
  job_name: string;
  logical_operator?: string;
  state: string;

}
