import { AwsSsmActivationArgsIntterface } from '../interfaces';


export class AwsSsmActivationArgs implements AwsSsmActivationArgsIntterface {
  name?: string;
  description?: string;
  expiration_date?: string;
  iam_role: string;
  registration_limit?: string;

}
