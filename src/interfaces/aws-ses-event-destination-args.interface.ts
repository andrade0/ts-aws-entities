import { AwsSesEventDestinationArgsCloudwatchDestinationIntterface, AwsSesEventDestinationArgsKinesisDestinationIntterface, AwsSesEventDestinationArgsSnsDestinationIntterface } from '.';

export interface AwsSesEventDestinationArgsIntterface {
  	name: string;
	configuration_set_name: string;
	enabled?: string;
	matching_types: string;
	cloudwatch_destination?: AwsSesEventDestinationArgsCloudwatchDestinationIntterface;
	kinesis_destination?: AwsSesEventDestinationArgsKinesisDestinationIntterface;
	sns_destination?: AwsSesEventDestinationArgsSnsDestinationIntterface;

}
