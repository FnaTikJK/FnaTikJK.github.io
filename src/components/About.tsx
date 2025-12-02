import {Avatar, Box, Heading, Text} from "@chakra-ui/react";
import Image from 'next/image';

const About = () => {
    return (
        <Box
            as={"div"}
            height={"300px"}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                flexDirection: 'column', // вертикальное расположение
                gap: "24px" // отступ между элементами
            }}
            textColor={"white"}
        >
            <Box>
                <Heading size={"xl"}>
                    Привет! Рад видеть тебя на моей странице.
                </Heading>
            </Box>
            <Box maxW={"1000px"} px={4}>
                <Text fontSize={"lg"} lineHeight={"tall"}>
                    Меня зовут Яськов Антон, я Fullstack разработчик с с 2+ годами коммерческого опыта.
                    По совместительству являюсь студентом магистратуры УрФУ, где активно применяю навыки DevOps и развиваю soft-скиллы.<br/>
                    Я являюсь энтузиастом своего дела, постоянно развиваюсь сам и менторю других.
                </Text>
            </Box>
        </Box>
    )
}

export default About;