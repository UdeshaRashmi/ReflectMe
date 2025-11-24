import api from './api';

export const getAchievements = async () => {
  try {
    const response = await api.get('/achievements');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch achievements');
  }
};

export const getAchievementById = async (id) => {
  try {
    const response = await api.get(`/achievements/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch achievement');
  }
};

export const createAchievement = async (achievementData) => {
  try {
    const response = await api.post('/achievements', achievementData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create achievement');
  }
};

export const updateAchievement = async (id, achievementData) => {
  try {
    const response = await api.put(`/achievements/${id}`, achievementData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update achievement');
  }
};

export const deleteAchievement = async (id) => {
  try {
    const response = await api.delete(`/achievements/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete achievement');
  }
};