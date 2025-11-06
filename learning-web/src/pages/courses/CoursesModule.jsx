import { useSearchParams } from "react-router-dom";
import InvalidCourse from "../errors/InvalidCourse";
import PaymentPage from "../payment/Payment";
import CoursePlayerLayout from "./CoursePlayerLayout";
import { getSubscriptionStatus, getVideosOfCourse } from "../../api/courseRequestHandler";

const CoursesModule = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");

  // Validate courseId
  if (!courseId) return <InvalidCourse message="Invalid Course." />;

  // Fetch subscription details
  const { status, data: subscription_status } = getSubscriptionStatus(courseId);
  if (!status || !subscription_status) return <InvalidCourse message="Invalid Course." />;

  // If not subscribed
  if (subscription_status !== "subscribed")
    return <PaymentPage courseId={courseId} />;

  // If subscribed → fetch videos
  const { data: courseVideos } = getVideosOfCourse(courseId);

    return (
        <CoursePlayerLayout
            courseId={courseId}
            sections={courseVideos}
            subscription={subscription_status}
        />
    )
};

export default CoursesModule;
