import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  try {
    const photo = (await uploadPhoto()).body;
    const user = (await createUser());
    console.log(`${photo} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.error('Signup system offline', error);
  }
}
