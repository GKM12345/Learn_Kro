import { coursesData } from "../api_mock_data/coursesData";
import { videosData, videoDetailsData } from "../api_mock_data/videosData";

export function getAllCourses() {
    try {
        return {status: true, data: coursesData, message: "Courses fetched successfully."};
    } catch (error) {
        console.error("Error fetching courses:", error);
        return {status: false, data: [], message: "Failed to fetch courses."};
    }
}

export function getSubscriptionStatus(courseId) {
  try {
        const course = coursesData.find(c => c.courseId === courseId);  
        if (course) {
        return { status: true, data: course.subscriptionStatus, message: "Subscription status fetched successfully." };
        } else {
        return { status: false, data: null, message: "Course not found." };
        }
    }catch (error) { 
        console.error(`Error fetching subscription status for course ${courseId}:`, error);
        return { status: false, data: null, message: "Failed to fetch subscription status." };
    }
}

export function getVideosOfCourse(courseId) {
  try {
    const videos = videosData?.[courseId]?.sections || [];
    const lastSeenVideoId = videosData?.[courseId]?.lastSeenVideoId || null;
    return { status: true, data: videos, lastSeenVideoId: lastSeenVideoId, message: "Videos fetched successfully." };
  } catch (error) {
    console.error(`Error fetching videos for course ${courseId}:`, error);
    return { status: false, data: [], lastSeenVideoId: null, message: "Failed to fetch videos." };
  }
}

export function getVideoById(videoId) {
  if(videoDetailsData[videoId]) {
    return { status: true, url: videoDetailsData[videoId] };
  }
  return { status: true, url: null };
} 
