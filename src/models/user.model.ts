export interface User {
  _id: String;
  profile: {
    first_name: string;
    last_name: string;
    bio: string;
    avatar: string;
  };
}
