let userName: string = "Ty";

let favNumber: number = 22;

let isValid: boolean = true;

//string, number, boolean

type StringOrNum = string | number;

let userId: StringOrNum = "abc1";

type User = { name: string; age: number; isAdmin: boolean; id: number };

let user: User;

user = {
  name: "Ty",
  age: 28,
  isAdmin: true,
  id: 123,
};

let hobbies: string[];

hobbies = ["Gym", "Bulking", "Coding"];

let numArrays: number[];

numArrays = [123, 456, 789];

function add(a: number, b: number) {
  const result = a + b;
  console.log(result);
}

type AddFn = (a: number, b: number) => void;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);

//are primarily to define object types
interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;

creds = {
  password: "abc",
  email: "test@gmail.com",
};

class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
}

function login(credentials: Credentials) {}

login(new AuthCredentials());

//merging types
// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ["login"],
//   userName: "Ty",
// };

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ["Login"],
  userName: "Ty",
};

//literal types

type Role = "admin" | "user" | "editor";

let role: Role;

//type guards
function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    //do something
  }
}

//generic types
let roles: Role[];
roles = ["admin", "editor"];

type DataStorage<TypePlaceholder> = {
  storage: TypePlaceholder[];
  add: (data: TypePlaceholder) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
};

