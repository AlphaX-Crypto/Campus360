/**
 * Utility formatters for Campus360
 */

export function formatDate(dateString) {
  if (!dateString) return '—';
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  } catch {
    return dateString;
  }
}

export function formatRelativeTime(dateString) {
  if (!dateString) return '—';
  try {
    const now = new Date();
    const date = new Date(dateString);
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  } catch {
    return dateString;
  }
}

export function formatStatusLabel(status) {
  if (!status) return 'Unknown';
  switch (status.toUpperCase()) {
    case 'PENDING':
      return 'Pending Review';
    case 'IN_REVIEW':
      return 'Under Review';
    case 'APPROVED':
      return 'Approved';
    case 'REJECTED':
      return 'Rejected';
    default:
      return status;
  }
}
