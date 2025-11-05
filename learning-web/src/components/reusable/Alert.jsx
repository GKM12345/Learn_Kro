import React from 'react'
import { Box, Alert } from '@chakra-ui/react';
import { CloseButton } from "../ui/close-button"

const AlertBox = (props) => {
  const {status = "success", size= "sm", title= null, description = null, showAlert = false} = props;
  if(!showAlert) return null;
  return (
    <Box position="fixed" bottom="2" right="2">
      <Alert.Root status={status} size={size}>
        <Alert.Indicator />
        <Alert.Content>
          {title && <Alert.Title>{title}</Alert.Title>}
          {description && <Alert.Description>{description}</Alert.Description>}
        </Alert.Content>
        <CloseButton pos="relative" top="-2" insetEnd="-2" />
      </Alert.Root>
    </Box>
  )
}

export default AlertBox;

