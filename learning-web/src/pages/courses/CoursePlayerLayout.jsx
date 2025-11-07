import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import SectionList from "./SectionList";
import VideoPlayer from "./VideoPlayer";
import { getTitleAndPrevNextVideoIds } from "../../utils/helper";

const CoursePlayerLayout = ({ courseId, sections, lastSeenVideoId }) => {

  const [videoId, setVideoId] = useState(lastSeenVideoId ?? sections?.[0]?.videos?.[0]?.videoId);
  const {prevVideoId, nextVideoId, title} = getTitleAndPrevNextVideoIds(sections, videoId);
  const onNavigate = (newId) => {
    setVideoId(newId);
  }
  return (
    <Flex
      direction={{ base: "column-reverse", md: "row" }}
      h={{ base: "100%" }}
      overflow="hidden"
    >
      <SectionList 
        sections={sections} 
        onNavigate={onNavigate} 
        videoId={videoId} 
      />
      <VideoPlayer 
        videoId={videoId} 
        prevVideoId={prevVideoId} 
        nextVideoId={nextVideoId} 
        title={title} 
        onNavigate={onNavigate}
      />
      
    </Flex>
  );
};

export default CoursePlayerLayout;
