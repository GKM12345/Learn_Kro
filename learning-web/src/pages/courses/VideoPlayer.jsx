import React from "react";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { useColorModeValue } from '../../components/ui/color-mode'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getVideoById } from "../../api/courseRequestHandler";

const VideoPlayer = (props) => {
  const { videoId, prevVideoId, nextVideoId, title, onNavigate } = props;
  const res = getVideoById(videoId);
  const videoUrl = res?.status ? res.url : null;
  const playerBg = useColorModeValue("blackAlpha.900", "gray.800");
  const aspectRatio = useBreakpointValue({ lg: "16 / 9", xl: "16 / 8" });

  return (
    <Box
      flex={{ base: "none", md: "2" }}
      p={0}
      shadow={{ base: "none", md: "md" }}
      borderRadius="md"
      overflow="hidden"
      position="relative"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      {/* Video Container */}
      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={{ base: 2, md: 4 }}
        px={{ base: 0, md: 4 }}
      >
        <Box
          as="video"
          controls
          autoPlay
          width="100%"
          maxW="1080px"
          borderRadius="lg"
          border="1px solid"
          borderColor={playerBg}
          boxShadow="xl"
          src={videoUrl}
          style={{
            aspectRatio: aspectRatio,
            backgroundColor: "black",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Title and Navigation */}
      <Box
        w="100%"
        px={{ base: 4, md: 10 }}
        pb={2}
        display="flex"
        flexDir={{ base: "row"}}
        justifyContent="space-around"
        alignItems="center"
      >
        {prevVideoId ? <FaArrowLeft onClick={() => onNavigate(prevVideoId)} /> : null}
        <Text
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="semibold"
          textAlign="center"
          flex="1"
          px={{ base: 0, md: 4 }}
          noOfLines={2}
        >
          {title || "Untitled Video"}
        </Text>
        {nextVideoId ? <FaArrowRight onClick={() => onNavigate(nextVideoId)} /> : null}
      </Box>
    </Box>
  );
};

export default React.memo(VideoPlayer);