import { AwsBudgetsBudgetIntterface } from '../interfaces';
import { AwsBudgetsBudgetArgs, AwsBudgetsBudgetAttrs } from '.';

export class AwsBudgetsBudget implements AwsBudgetsBudgetIntterface {
  name: string = 'aws_budgets_budget';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/budgets_budget.html';
  groupName: string = 'Budget Resources';
  args: AwsBudgetsBudgetArgs;
  attrs: AwsBudgetsBudgetAttrs;

}
