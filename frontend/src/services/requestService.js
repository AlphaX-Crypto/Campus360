import { apiClient } from './api';
import { MOCK_REQUESTS } from '../data/mockData';

export const requestService = {
  /**
   * Fetch list of requests filtered by role or student ID
   */
  async getRequests(filters = {}) {
    try {
      if (import.meta.env.VITE_USE_REAL_BACKEND === 'true') {
        const query = new URLSearchParams(filters).toString();
        return await apiClient.get(`/requests${query ? `?${query}` : ''}`);
      }
      return MOCK_REQUESTS;
    } catch (error) {
      console.warn('Fallback to mock requests:', error.message);
      return MOCK_REQUESTS;
    }
  },

  /**
   * Fetch single request by Universal Request ID (e.g., C360-2026-0001)
   */
  async getRequestById(requestId) {
    try {
      if (import.meta.env.VITE_USE_REAL_BACKEND === 'true') {
        return await apiClient.get(`/requests/${requestId}`);
      }
      const found = MOCK_REQUESTS.find((r) => r.requestId === requestId);
      return found || MOCK_REQUESTS[0];
    } catch (error) {
      console.warn('Fallback to mock request detail:', error.message);
      return MOCK_REQUESTS.find((r) => r.requestId === requestId) || MOCK_REQUESTS[0];
    }
  },

  /**
   * Submit new student request
   */
  async createRequest(payload) {
    try {
      if (import.meta.env.VITE_USE_REAL_BACKEND === 'true') {
        return await apiClient.post('/requests', payload);
      }
      // Generate a mock universal ID
      const newId = `C360-2026-000${MOCK_REQUESTS.length + 1}`;
      const newRequest = {
        requestId: newId,
        studentId: payload.studentId || 'STU001',
        studentName: payload.studentName || 'Aarav Sharma',
        department: payload.department || 'Computer Science & Engineering',
        category: payload.category || 'General Request',
        title: payload.title || 'Untitled Request',
        description: payload.description || '',
        status: 'PENDING',
        currentStage: 'FACULTY',
        priority: payload.priority || 'NORMAL',
        createdAt: new Date().toISOString(),
        timeline: [
          {
            stage: 'SUBMITTED',
            label: 'Request Submitted',
            status: 'COMPLETED',
            timestamp: new Date().toISOString(),
            actor: 'Student',
            remarks: 'Submitted via portal',
          },
          {
            stage: 'FACULTY',
            label: 'Faculty Advisor Review',
            status: 'CURRENT',
            timestamp: null,
            actor: 'Assigned Faculty',
            remarks: 'Queued for review',
          },
        ],
      };
      return newRequest;
    } catch (error) {
      console.warn('Mock request creation fallback:', error.message);
      throw error;
    }
  },

  /**
   * Approve or reject a request stage
   */
  async reviewRequest(requestId, decision, remarks = '') {
    try {
      if (import.meta.env.VITE_USE_REAL_BACKEND === 'true') {
        return await apiClient.post(`/requests/${requestId}/review`, { decision, remarks });
      }
      return { success: true, requestId, decision, remarks, updatedAt: new Date().toISOString() };
    } catch (error) {
      console.warn('Mock review fallback:', error.message);
      throw error;
    }
  },
};
