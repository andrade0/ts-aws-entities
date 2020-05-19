import { AwsCognitoUserPoolArgsIntterface } from '../interfaces';
import { AwsCognitoUserPoolArgsAdminCreateUserConfig,  AwsCognitoUserPoolArgsDeviceConfiguration,  AwsCognitoUserPoolArgsEmailConfiguration,  AwsCognitoUserPoolArgsLambdaConfig,  AwsCognitoUserPoolArgsPasswordPolicy,  AwsCognitoUserPoolArgsSchema,  AwsCognitoUserPoolArgsSmsConfiguration,  AwsCognitoUserPoolArgsUserPoolAddOns,  AwsCognitoUserPoolArgsVerificationMessageTemplate } from '.';

export class AwsCognitoUserPoolArgs implements AwsCognitoUserPoolArgsIntterface {
  	admin_create_user_config?: AwsCognitoUserPoolArgsAdminCreateUserConfig;
	alias_attributes?: string;
	auto_verified_attributes?: string;
	device_configuration?: AwsCognitoUserPoolArgsDeviceConfiguration;
	email_configuration?: AwsCognitoUserPoolArgsEmailConfiguration;
	name: string;
	email_verification_subject?: string;
	email_verification_message?: string;
	lambda_config?: AwsCognitoUserPoolArgsLambdaConfig;
	mfa_configuration: string;
	password_policy?: AwsCognitoUserPoolArgsPasswordPolicy;
	schema?: AwsCognitoUserPoolArgsSchema;
	sms_authentication_message?: string;
	sms_configuration?: AwsCognitoUserPoolArgsSmsConfiguration;
	sms_verification_message?: string;
	tags?: string;
	username_attributes?: string;
	user_pool_add_ons?: AwsCognitoUserPoolArgsUserPoolAddOns;
	verification_message_template?: AwsCognitoUserPoolArgsVerificationMessageTemplate;
	email_message?: string;
	email_subject?: string;
	sms_message?: string;
	max_value?: string;
	min_value?: string;
	max_length?: string;
	min_length?: string;
	id: string;
	arn: string;
	endpoint: string;
	creation_date: string;
	last_modified_date: string;

}
