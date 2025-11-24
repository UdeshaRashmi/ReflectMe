import api from './api';

export const getAnalyticsData = async () => {
  try {
    const response = await api.get('/analytics');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch analytics data');
  }
};

export const getGoalProgress = async () => {
  try {
    const response = await api.get('/analytics/goal-progress');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch goal progress');
  }
};

export const getAchievementStats = async () => {
  try {
    const response = await api.get('/analytics/achievements');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch achievement stats');
  }
};