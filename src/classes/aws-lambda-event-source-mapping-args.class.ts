import { AwsLambdaEventSourceMappingArgsIntterface } from '../interfaces';


export class AwsLambdaEventSourceMappingArgs implements AwsLambdaEventSourceMappingArgsIntterface {
  batch_size?: string;
  event_source_arn: string;
  enabled?: string;
  function_name: string;
  starting_position?: string;
  starting_position_timestamp?: string;

}
