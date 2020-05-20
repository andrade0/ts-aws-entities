import { AwsSesEventDestinationArgsIntterface } from '../interfaces';
import {
  AwsSesEventDestinationArgsCloudwatchDestination,
  AwsSesEventDestinationArgsKinesisDestination,
  AwsSesEventDestinationArgsSnsDestination,
} from '.';

export class AwsSesEventDestinationArgs implements AwsSesEventDestinationArgsIntterface {
  name: string;
  configuration_set_name: string;
  enabled?: string;
  matching_types: string;
  cloudwatch_destination?: AwsSesEventDestinationArgsCloudwatchDestination;
  kinesis_destination?: AwsSesEventDestinationArgsKinesisDestination;
  sns_destination?: AwsSesEventDestinationArgsSnsDestination;

}
