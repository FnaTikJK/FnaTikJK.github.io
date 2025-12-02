"use client"
import {Box, Flex, Grid, GridItem, Heading, Icon, ListItem, Text, UnorderedList} from "@chakra-ui/react";
import {Server, Container, AppWindow} from "lucide-react";



const Skills = () => {
    const features = [
        {
            icon: Server,
            title: "Backend",
            description:
            <>
                Разрабатываю надежные серверные приложения. Пишу чистый, эффективный и поддерживаемый код, обеспечивая безопасность, производительность и масштабируемость системы.
            </>,
            keySkills:
            <>
                <UnorderedList>
                    <ListItem>C#</ListItem>
                    <ListItem>ASP.NET Core</ListItem>
                    <ListItem>EF Core</ListItem>
                    <ListItem>PostgreSQL</ListItem>
                    <ListItem>WebSockets</ListItem>
                    <ListItem>RabbitMQ</ListItem>
                </UnorderedList>
            </>
        },
        {
            icon: AppWindow,
            title: "Frontend",
            description:
            <>
                Cоздаю интуитивные и визуально привлекательные интерфейсы. Пишу чистый, модульный и поддерживаемый код на современных фреймворках, обеспечивая быструю загрузку и отзывчивость страниц.
            </>,
            keySkills:
            <>
                <UnorderedList>
                    <ListItem>TypeScript</ListItem>
                    <ListItem>React</ListItem>
                    <ListItem>Next.js</ListItem>
                    <ListItem>ChakraUI</ListItem>
                </UnorderedList>
            </>
        },
        {
            icon: Container,
            title: "DevOps",
            description:
            <>
                Автоматизирую жизненный цикл приложений — от сборки до развертывания и мониторинга. Обеспечиваю стабильность, безопасность и масштабируемость систем.
            </>,
            keySkills:
            <>
                <UnorderedList>
                    <ListItem>Docker</ListItem>
                    <ListItem>Docker compose</ListItem>
                    <ListItem>Kubernetes</ListItem>
                    <ListItem>Kibana</ListItem>
                    <ListItem>Prometheus</ListItem>
                </UnorderedList>
            </>
        }
        // Добавьте больше элементов по необходимости
    ];

    return (
        <Box maxW="1200px" mx="auto" p={4} textColor={"white"}>
            {/* Заголовок таблицы (опционально) */}
            <Heading textAlign="center" mb={8} size="lg">
                Мои скиллы
            </Heading>

            {/* Таблица на Grid */}
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                gap={8}
            >
                {features.map((feature, index) => (
                    <GridItem key={index}>
                        <Flex
                            direction="column"
                            align="center"
                            textAlign="center"
                            p={6}
                            bg="whiteAlpha.100"
                            borderRadius="lg"
                            height="100%"
                            _hover={{
                                transform: "translateY(-4px)",
                                transition: "transform 0.2s",
                                boxShadow: "lg"
                            }}
                        >
                            {/* Иконка в круге */}
                            <Flex
                                w="80px"
                                h="80px"
                                align="center"
                                justify="center"
                                borderRadius="full"
                                bg="blue.500"
                                color="white"
                                mb={4}
                            >
                                <Icon as={feature.icon} boxSize={8} />
                            </Flex>

                            {/* Название */}
                            <Heading size="md" mb={3}>
                                {feature.title}
                            </Heading>

                            {/* Описание */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    flexDirection: 'column', // вертикальное расположение
                                    gap: "12px" // отступ между элементами
                                }}
                                textColor="gray.300"
                                fontSize={"md"}
                            >
                                <Text  height={"150px"}>
                                    {feature.description}
                                </Text>
                                <Text  >
                                    Технологии:<br/>

                                </Text>
                                {feature.keySkills}
                            </Box>
                        </Flex>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;