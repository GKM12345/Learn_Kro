import React from "react";
import { Text, Accordion, HStack, VStack, Checkbox } from "@chakra-ui/react";
import { useColorModeValue } from '../../components/ui/color-mode'
import { FaVideo } from "react-icons/fa";
import { getSectionIndexByVideoId } from "../../utils/helper";


const SectionList = ({ sections, onNavigate, videoId }) => {
  const openSectionValue = getSectionIndexByVideoId(sections, videoId);
  return (
    <Accordion.Root
      collapsible
      defaultValue={openSectionValue}
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
                    _hover={{ cursor: "pointer", bg: useColorModeValue("gray.100", "gray.500") }}
                    borderRadius="sm"
                    onClick={()=>{onNavigate(video.videoId)}}
                    transition="background 0.2s ease-in-out"
                    bg = {video.videoId === videoId ? useColorModeValue("gray.200", "gray.600") : "transparent"}
                  >
                      <VStack align="start" spacing={0}>
                        <HStack>
                        <Checkbox.Root size="sm" onClick={(e)=>e.stopPropagation()}>
                          <Checkbox.HiddenInput />
                          <Checkbox.Control />
                        </Checkbox.Root>
                        <Text fontSize="sm" noOfLines={1}>
                          {video.title}
                        </Text>
                        </HStack>
                        <HStack spacing={2} mt={-1} opacity={0.8}>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <FaVideo
                            size={12}
                            color={useColorModeValue("#244d78ff", "#90cdf4")}
                          />
                          <Text fontSize="xs">{video.duration || "3:45"}</Text>
                        </HStack>
                      </VStack>
                  </HStack>
                ))
              ) : (<Text fontSize="sm">No videos in this section.</Text>)}
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default React.memo(SectionList);