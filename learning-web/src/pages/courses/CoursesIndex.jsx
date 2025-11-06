import { useState, useEffect } from "react";
import { Button, Card, Stack, HStack, Badge } from "@chakra-ui/react";
import { HiStar } from "react-icons/hi"
import useNavigateUrl from "../../hooks/useNavigateUrl";
import AvatarBox from "../../components/reusable/AvatarBox";
import { getAllCourses } from "../../api/courseRequestHandler";

const courseAvailabilityStatus = {
  subscribed: {color: "green", label: "Subscribed", buttonName: "Continue"},
  expired: {color: "red", label: "Expired", buttonName: "Renew"},
  not_subscribed: {color: "gray", label: "Try Now", buttonName: "Enroll"},
}

const CoursesIndex = () => {
  const [courseList, setCourseList] = useState([]);
  const { goto } = useNavigateUrl();

  useEffect(() => {
    // Simulate fetching course data
    fetchCourseList();
  }, [])

  const fetchCourseList = async() => {
    const res = await getAllCourses();
    if(res.status) {
      setCourseList(res.data);
    }else {
      //show error toast
    }
  }

  const handleCourseSelect = (courseId, subscriptionStatus) => {
    console.log("Selected Course ID:", courseId, "Status:", subscriptionStatus);
    goto(`courses/module?courseId=${courseId}`);
  }

  return (
    <Stack
      gap="4"
      direction={{ base: "column", sm: "row" }} // Column on mobile, row on desktop
      wrap="wrap"
      align="center"
      w="100%"
      p={4}
    >
      {courseList.map((course, index) => (
        <Card.Root
          key={course.courseId}
          variant="elevated"
          width={{ base: "100%", sm: "100%", md: "360px", lg: "420px" }} // 100% on mobile, 320px on desktop
          maxW="100%"
          _hover={{ transform: "scale(1.02)", transition: "0.2s ease-in-out" }}
        >
          <Card.Body gap="3">
            <AvatarBox src={course.thumbnail} name="Nue Camp" />
            <Card.Title fontSize="lg" mb="2">{course.name}</Card.Title>
            <HStack mt="4">
              <Badge colorPalette={courseAvailabilityStatus[course.subscriptionStatus].color}>
                {courseAvailabilityStatus[course.subscriptionStatus].label}
              </Badge>
              {course.isNew ? <Badge colorPalette="purple"> <HiStar /> New</Badge> : null}
            </HStack>
          </Card.Body>
          <Card.Footer justifyContent="flex-start" gap="2">
            <Button variant="outline" onClick={()=>{handleCourseSelect(course.courseId, course.subscriptionStatus)}}>{courseAvailabilityStatus[course.subscriptionStatus].buttonName}</Button>
            {course.freeTrial ? <Button colorScheme="blue">Start Trail</Button> : null}
          </Card.Footer>
        </Card.Root>
      ))}
    </Stack>
  );
};

export default CoursesIndex;
