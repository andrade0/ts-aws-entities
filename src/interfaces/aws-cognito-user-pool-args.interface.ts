import {
  AwsCognitoUserPoolArgsAdminCreateUserConfigIntterface,
  AwsCognitoUserPoolArgsDeviceConfigurationIntterface,
  AwsCognitoUserPoolArgsEmailConfigurationIntterface,
  AwsCognitoUserPoolArgsLambdaConfigIntterface,
  AwsCognitoUserPoolArgsPasswordPolicyIntterface,
  AwsCognitoUserPoolArgsSchemaIntterface,
  AwsCognitoUserPoolArgsSmsConfigurationIntterface,
  AwsCognitoUserPoolArgsUserPoolAddOnsIntterface,
  AwsCognitoUserPoolArgsVerificationMessageTemplateIntterface,
} from '.';

export interface AwsCognitoUserPoolArgsIntterface {
  admin_create_user_config?: AwsCognitoUserPoolArgsAdminCreateUserConfigIntterface;
  alias_attributes?: string;
  auto_verified_attributes?: string;
  device_configuration?: AwsCognitoUserPoolArgsDeviceConfigurationIntterface;
  email_configuration?: AwsCognitoUserPoolArgsEmailConfigurationIntterface;
  name: string;
  email_verification_subject?: string;
  email_verification_message?: string;
  lambda_config?: AwsCognitoUserPoolArgsLambdaConfigIntterface;
  mfa_configuration: string;
  password_policy?: AwsCognitoUserPoolArgsPasswordPolicyIntterface;
  schema?: AwsCognitoUserPoolArgsSchemaIntterface;
  sms_authentication_message?: string;
  sms_configuration?: AwsCognitoUserPoolArgsSmsConfigurationIntterface;
  sms_verification_message?: string;
  tags?: string;
  username_attributes?: string;
  user_pool_add_ons?: AwsCognitoUserPoolArgsUserPoolAddOnsIntterface;
  verification_message_template?: AwsCognitoUserPoolArgsVerificationMessageTemplateIntterface;
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
