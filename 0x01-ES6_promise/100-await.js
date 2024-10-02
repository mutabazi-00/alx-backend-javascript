import uploadPhoto from './5-photo-reject.js';
import createUser from './4-user-promise.js';

const asyncUploadUser = async () => {
  try {
    const photo = await uploadPhoto('photo-profile-1.jpg');
    const user = await createUser('Guillaume', 'Salva');
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
