export interface AwsIamPolicyDocumentArgsStatementIntterface {
  sid?: string;
  effect?: string;
  actions?: string;
  not_actions?: string;
  resources?: string;
  not_resources?: string;
  principals?: string;
  not_principals?: string;
  condition?: string;
  test: string;
  variable: string;
  values: string;

}
