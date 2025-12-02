import {Box, Heading, SlideFade} from "@chakra-ui/react";

const Title = () => {
    return (
        <Box
            as={"div"}
            height={"300px"}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            <SlideFade in transition={{enter: {duration: 0.9}}}>
                <Heading size={"4xl"} color={"white"}>
                    Fullstack developer & DevOps
                </Heading>
            </SlideFade >
        </Box>
    )
}

export default Title;