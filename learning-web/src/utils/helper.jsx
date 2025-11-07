export const getSectionIndexByVideoId = (sections, videoId) => {
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.videos.some(video => video.videoId === videoId)) {
            return [String(i)];
        }
    }
    return []; // Video not found in any section
}

export function getTitleAndPrevNextVideoIds(sections, currentVideoId) {
  let prevVideoId = null;
  let nextVideoId = null;
  let title = null;
  for (const section of sections) {
    for (const video of section.videos) {
      if (video.videoId === currentVideoId) {
        prevVideoId = video.prevVideoId;
        nextVideoId = video.nextVideoId;
        title = video.title;
        break;
      }
    }
  }
  return { prevVideoId, nextVideoId, title };
}