#Install: 
```
npm install dynamodb-repository
```

###Usage exemple: 
```
import {DiggingDynamodbClient, DiggingDynamodbClientInterface} from "digging-dynamodb-client";

// define primary key of your table. It can be one or to fields depends on your dynamoDb table setup
class TableKey{
  id: string;
}

// Define the Class your repository is going to use.
class User{
  id: string;
  nameName: string;
  email: string;
}

//Create your repository class and extend from DiggingDynamodbClient, the generic types setted like this: 
class UserRepository extends DiggingDynamodbClient<User, TableKey> {
  constructor(
    public TableName = 'users',
    public classType = User,
  ) {
    super(TableName);
  }
}

//get an instance of your repository
const repository = new UserRepository();

// just use it like this: 
(async () => {
  const u = new User();
  u.id = 'FEZF43TFDF';
  u.nameName = 'andFDrade';
  u.email = 'andradeolivier@gmail.com';
  const key = new TableKey();
  key.id = u.id;
  await repository.insertOne(u);
  const u2 = new User();
  u2.id = u.id;
  u2.nameName = u.nameName;
  u2.email = 'pauline@gmail.com';
  await repository.updateOne(key, u2);
  const user: User = await repository.findOne(key);
  console.log(user)
  await repository.deleteOne(key, 'nameName = :name', {':name': 'andFDrade'});
  const users = await repository.getAll();
  console.log(users)
  await repository.addMany([
    {id: 'RE4', nameName: 'ggfg', email: 'fdfdfd'},
    {id: 'FRE4', nameName: 'fffff', email: 'fdffffdfd'},
    {id: 'RcE4', nameName: 'ggfg', email: 'fdfdfd'},
    {id: 'RjEG4', nameName: 'gfffffffgfg', email: 'fdfdfd'},
    {id: 'RfE4', nameName: 'ggfg', email: 'fdfdffffd'},
    {id: 'RtE4', nameName: 'fffffff', email: 'fdfdfd'},
    {id: 'RttE4', nameName: 'ggfg', email: 'fdfdfd'},
  ]);
  const users1 = await repository.getAll();
  console.log(users1)
})();


```

##.env variables:
```
LOCAL=true // will connect to http://localhost:8000
DEBUG=false
```

##AWS Credentials

They are taken from yout local setup, usualy ~/.aws folder
