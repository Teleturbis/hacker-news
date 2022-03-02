export default class Util {
  static toRelativeTimeStr(time) {
    const seconds = Math.floor(time / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4);
    const years = Math.floor(months / 12);

    if (years > 0) return `${years} ${years > 1 ? 'years' : 'year'} ago`;
    if (months > 0) return `${months} ${months > 1 ? 'months' : 'month'} ago`;
    if (weeks > 0) return `${weeks} ${weeks > 1 ? 'weeks' : 'week'} ago`;
    if (days > 0) return `${days} ${days > 1 ? 'days' : 'day'} ago`;
    if (hours > 0) return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
    if (minutes > 5)
      return `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`;
    return `just now`;
  }

  static addHighlightsToString(str, highlightText) {
    console.log(str, highlightText);
    return str.replaceAll(
      highlightText,
      <span class="highlight">${highlightText}</span>
    );
  }
}
