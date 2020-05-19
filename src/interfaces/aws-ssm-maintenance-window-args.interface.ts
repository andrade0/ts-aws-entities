

export interface AwsSsmMaintenanceWindowArgsIntterface {
  	name: string;
	schedule: string;
	cutoff: string;
	duration: string;
	allow_unassociated_targets?: string;
	enabled?: string;
	end_date?: string;
	schedule_timezone?: number;
	start_date?: string;

}
