/**
 * Safely parses and formats an ISO date string
 * @param dateString - ISO date string to format
 * @returns Formatted date string or empty string if invalid
 */
export function formatDate(dateString: string): string {
  try {
    // Ensure the date string is in a valid format
    if (!dateString || typeof dateString !== 'string') {
      return '';
    }

    // Parse the date string
    const date = new Date(dateString);
    
    // Check if the date is valid using Number.isNaN for safer type checking
    if (Number.isNaN(date.getTime())) {
      return '';
    }

    // Format the date using Intl.DateTimeFormat for consistent output
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
} 