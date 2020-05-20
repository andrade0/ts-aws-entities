export interface AwsSsmActivationArgsIntterface {
  name?: string;
  description?: string;
  expiration_date?: string;
  iam_role: string;
  registration_limit?: string;

}
