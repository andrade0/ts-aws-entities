#Install: 
```
npm install ts-aws-entities -save
```

###Usage exemple: 
```
import { search } from "ts-aws-entities";

const result: awsItem[] = search('lambda');

console.log(result);
```
Output: 
````
[ { name: 'aws_lambda_function',
    class: 'AwsLambdaFunction',
    type: 'resource',
    instance:
     AwsLambdaFunction {
       name: 'aws_lambda_function',
       type: 'resource',
       url:
        'https://www.terraform.io/docs/providers/aws/r/lambda_function.html',
       groupName: 'Lambda Resources' },
    metaData:
     { name: 'aws_lambda_function',
       type: 'resource',
       url:
        'https://www.terraform.io/docs/providers/aws/r/lambda_function.html',
       groupName: 'Lambda Resources',
       args: [Array],
       attrs: [Array] } },
  { name: 'aws_lambda_invocation',
    class: 'AwsLambdaInvocation',
    type: 'data_source',
    instance:
     AwsLambdaInvocation {
       name: 'aws_lambda_invocation',
       type: 'data_source',
       url:
        'https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html',
       groupName: 'Data Sources' },
    metaData:
     { name: 'aws_lambda_invocation',
       type: 'data_source',
       url:
        'https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html',
       groupName: 'Data Sources',
       args: [Array],
       attrs: [Array] } },
  { name: 'aws_lambda_alias',
    class: 'AwsLambdaAlias',
    type: 'resource',
    instance:
     AwsLambdaAlias {
       name: 'aws_lambda_alias',
       type: 'resource',
       url:
        'https://www.terraform.io/docs/providers/aws/r/lambda_alias.html',
       groupName: 'Lambda Resources' },
    metaData:
     { name: 'aws_lambda_alias',
       type: 'resource',
       url:
        'https://www.terraform.io/docs/providers/aws/r/lambda_alias.html',
       groupName: 'Lambda Resources',
       args: [Array],
       attrs: [Array] } },
  { name: 'aws_lambda_event_source_mapping',
    class: 'AwsLambdaEventSourceMapping',
    type: 'resource',
    instance:
     AwsLambdaEventSourceMapping {
       name: 'aws_lambda_event_source_mapping',
       type: 'resource',
       url:
        'https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html',
       groupName: 'Lambda Resources' },
    metaData:
     { name: 'aws_lambda_event_source_mapping',
       type: 'resource',
       url:
        'https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html',
       groupName: 'Lambda Resources',
       args: [Array],
       attrs: [Array] } },
  { name: 'aws_lambda_layer_version',
    class: 'AwsLambdaLayerVersion',
    type: 'resource',
    instance:
     AwsLambdaLayerVersion {
       name: 'aws_lambda_layer_version',
       type: 'resource',
       url:
        'https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html',
       groupName: 'Lambda Resources' },
    metaData:
     { name: 'aws_lambda_layer_version',
       type: 'resource',
       url:
        'https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html',
       groupName: 'Lambda Resources',
       args: [Array],
       attrs: [Array] } },
  { name: 'aws_lambda_permission',
    class: 'AwsLambdaPermission',
    type: 'resource',
    instance:
     AwsLambdaPermission {
       name: 'aws_lambda_permission',
       type: 'resource',
       url:
        'https://www.terraform.io/docs/providers/aws/r/lambda_permission.html',
       groupName: 'Lambda Resources' },
    metaData:
     { name: 'aws_lambda_permission',
       type: 'resource',
       url:
        'https://www.terraform.io/docs/providers/aws/r/lambda_permission.html',
       groupName: 'Lambda Resources',
       args: [Array],
       attrs: [] } } ]
```
