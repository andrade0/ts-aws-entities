import { AwsCloudtrailArgsEventSelectorIntterface } from '../interfaces';


export class AwsCloudtrailArgsEventSelector implements AwsCloudtrailArgsEventSelectorIntterface {
  read_write_type?: string;
  include_management_events?: string;
  data_resource?: string;

}
