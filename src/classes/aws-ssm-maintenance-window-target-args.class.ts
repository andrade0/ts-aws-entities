import { AwsSsmMaintenanceWindowTargetArgsIntterface } from '../interfaces';


export class AwsSsmMaintenanceWindowTargetArgs implements AwsSsmMaintenanceWindowTargetArgsIntterface {
  window_id: string;
  resource_type: string;
  targets: string;
  owner_information?: string;

}
