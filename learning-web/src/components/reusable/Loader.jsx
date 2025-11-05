import { Box, ProgressCircle } from "@chakra-ui/react"
import { AppLoaderZIndex, darkMode, lightMode } from "../../theme/config";
import { useColorModeValue } from "../ui/color-mode";
import styles from "./loader.module.css";


export const AppLoader = (props) => {
    const isLoading = false;
    const overLayColor = useColorModeValue(lightMode.loaderOverLayColor, darkMode.loaderOverLayColor);
    return (
        (isLoading ? 
            <Box
                className={styles.appLoaderOverlay}
                backgroundColor={overLayColor}
                zIndex={AppLoaderZIndex}
            > 
                <CircularLoader props={{...props}} strokeColor = "blue.400" isLoading />
            </Box> : null
        )
    );
}

export const CircularLoader = (props) => {
    const {value = null, size="md", isLoading = true, strokeColor = null} = props;
    return (
        isLoading ? (
            <ProgressCircle.Root value={value} size={size}>
                <ProgressCircle.Circle>
                    <ProgressCircle.Track />
                    <ProgressCircle.Range stroke={strokeColor} />
                </ProgressCircle.Circle>
            </ProgressCircle.Root>
        ) : null
    )
}