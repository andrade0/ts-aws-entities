import {
  AwsGlueClassifierArgsGrokClassifierIntterface,
  AwsGlueClassifierArgsJsonClassifierIntterface,
  AwsGlueClassifierArgsXmlClassifierIntterface,
} from '.';

export interface AwsGlueClassifierArgsIntterface {
  grok_classifier?: AwsGlueClassifierArgsGrokClassifierIntterface;
  json_classifier?: AwsGlueClassifierArgsJsonClassifierIntterface;
  name: string;
  xml_classifier?: AwsGlueClassifierArgsXmlClassifierIntterface;

}
