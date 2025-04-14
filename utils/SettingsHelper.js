// Check if the title is valid (non-empty and a string)
const isValidTitle = (title) => {
    return typeof title === 'string' && title.trim().length > 0;
  };
  
  // Normalize the title by capitalizing the first letter and trimming spaces
  const normalizeTitle = (title) => {
    const trimmed = title.trim();
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  };
  
  module.exports = {
    isValidTitle,
    normalizeTitle
  };
  