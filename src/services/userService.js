import api from './api';

export const getUserProfile = async () => {
  try {
    const response = await api.get('/user/profile');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user profile');
  }
};

export const updateUserProfile = async (userData) => {
  try {
    const response = await api.put('/user/profile', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update user profile');
  }
};

export const deleteUserAccount = async () => {
  try {
    const response = await api.delete('/user/profile');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete account');
  }
};