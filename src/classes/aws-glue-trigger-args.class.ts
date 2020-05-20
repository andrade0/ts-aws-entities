import { AwsGlueTriggerArgsIntterface } from '../interfaces';
import { AwsGlueTriggerArgsActions, AwsGlueTriggerArgsPredicate } from '.';

export class AwsGlueTriggerArgs implements AwsGlueTriggerArgsIntterface {
  actions: AwsGlueTriggerArgsActions;
  description?: string;
  enabled?: string;
  name: string;
  predicate?: AwsGlueTriggerArgsPredicate;
  schedule?: string;
  type: string;
  job_name: string;
  logical_operator?: string;
  state: string;

}
