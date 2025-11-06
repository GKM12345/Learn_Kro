import { useState, memo } from "react";
import { Box, Flex, SimpleGrid , Text, Separator, Accordion, HStack } from "@chakra-ui/react";
import { FaVideo } from "react-icons/fa";
import { getVideoById } from "../../api/courseRequestHandler";

const CoursePlayerLayout = ({ courseId, sections }) => {

  const [videoId, setVideoId] = useState(sections?.[0]?.videos?.[0]?.videoId);

  return (
    <Flex
      direction={{ base: "column-reverse", md: "row" }}
      h={{ base: "100%" }}
      overflow="hidden"
    >
      <SectionList sections={sections} setVideoId={setVideoId} />
      <VideoPlayer videoId={videoId} />
      
    </Flex>
  );
};

const SectionList = ({ sections, setVideoId }) => {
  return (
    <Accordion.Root
      collapsible
      // defaultValue={["0"]}
      w={{ base: "100%", md: "250px", lg: "300px" }}
      p={4}
      overflowY="auto"
      css={{
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
      h={{ base: "calc(100% - 250px)", md: "auto" }}
    >
      {sections.map((section, index) => (
        <Accordion.Item key={section.sectionTitle + index} value={String(index)}>
          {/* Trigger / Header */}
          <Accordion.ItemTrigger px={3} py={3} borderRadius="sm" _hover={{ cursor: "pointer" }}>
            <HStack flex="1" spacing={4}>
              <Text fontSize="md" fontWeight="medium" display="flex" alignItems="center" gap={2}>
                  {`${index + 1}.`} &nbsp; {section.sectionTitle}
              </Text>
            </HStack>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>

          {/* Content / Panel */}
          <Accordion.ItemContent>
            <Accordion.ItemBody px={6} >
              {section.videos?.length ? (
                section.videos.map((video, vidIndex) => (
                  <HStack
                    key={video.videoId}
                    py={2} px={2}
                    spacing={2}
                    _hover={{ cursor: "pointer" }}
                    borderRadius="sm"
                    border="1px solid"
                    onClick={()=>{setVideoId(video.videoId)}}
                  >
                    <FaVideo /> <Text fontSize="sm"> {video.title}</Text>
                  </HStack>
                ))
              ) : (
                <Text fontSize="sm">
                  No videos in this section.
                </Text>
              )}
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};


const VideoPlayer = memo(({videoId}) => {
  const res = getVideoById(videoId);
  let videoUrl = null;
  if(res.status) {
    videoUrl = res.url;
  }
  return (
    <Box
        flex={{ base: "none", md: "2" }}
        w={{ base: "100%", md: "70%" }}
        p={4}
        shadow={{ base: "none", md: "md" }}
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        position={{ base: "sticky", md: "static" }}
        top={{ base: 0, md: "auto" }}
        zIndex={{ base: 10, md: "auto" }}
      >
        <Box
          as="video"
          controls
          width="100%"
          height={{ base: "250px", md: "480px" }}
          borderRadius="lg"
          autoPlay
          src={videoUrl}
        />
        <Text fontSize="lg" fontWeight="bold" mt={3}>
          Current Video Title
        </Text>
      </Box>
  );
})

export default CoursePlayerLayout;
