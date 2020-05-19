import { AwsSsmActivationAttrsIntterface } from '../interfaces';


export class AwsSsmActivationAttrs implements AwsSsmActivationAttrsIntterface {
  	activation_code?: string;
	name?: string;
	description?: string;
	expired?: string;
	expiration_date?: string;
	iam_role?: string;
	registration_limit?: string;
	registration_count?: string;

}
