import { AwsBudgetsBudgetArgsIntterface } from '../interfaces';


export class AwsBudgetsBudgetArgs implements AwsBudgetsBudgetArgsIntterface {
  	account_id?: string;
	name?: string;
	name_prefix?: string;
	budget_type: string;
	cost_filters?: string;
	cost_types?: string;
	limit_amount: string;
	limit_unit: string;
	time_period_end?: string;
	time_period_start: string;
	time_unit: string;

}
