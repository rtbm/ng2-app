export interface User {
  _id: string;
  profile: {
    first_name: string;
    last_name: string;
    bio: string;
    avatar: string;
  };
}
