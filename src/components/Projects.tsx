"use client"
import React, { useState } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    IconButton,
    Link,
    Badge,
    Button,
    Image
} from '@chakra-ui/react';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SimpleCarousel = () => {
    const projects = [
        {
            id: 1,
            title: "Биллинг система для мобильных операторов",
            description: "Сервис для мобильного оператора. Role-based авторизация. ЛК у пользователей и CRM админ-панель для менеджеров. Выставление и оплата счетов",
            partners: ["Альфабанк"],
            githubUrl: "https://github.com/FnaTikJK/crimean-billing",
            imageUrl: "https://te-net.io/wp-content/uploads/2021/07/chto-takoe-billing.jpg",
            technologies: [".Net 6", "EF Core 6", "PostgreSQL", "Redis"]
        },
        {
            id: 2,
            title: "Интегрируемая CRM система чатов с менеджерами",
            description: "ЛК для сайта-интегратора. ЛК менеджеров. Поддежрка чата, подключаемого к любому сайту в одну строку",
            partners: ["66bit"],
            githubUrl: "https://github.com/FnaTikJK/Crm66bit",
            imageUrl: "https://img.freepik.com/premium-vector/support-chat-bot-window-chatbot-messenger-app-interface-vector-templates-online-customer-support-web-help-desk-dialog-website-live-consultant-message-box-chatbot-dialogue-message-box_53500-398.jpg",
            technologies: [".Net 6", "EF Core 6", "PostgreSQL", "WebSockets"]
        },
        {
            id: 3,
            title: "Агрегатор репетиторов",
            description: "Аналог профи.ру только для репетиторов. Есть ЛК пользователя и репетитора. Поиск, сортировка, чаты",
            partners: ["66bit"],
            githubUrl: "https://github.com/FnaTikJK/TutorAggregator",
            imageUrl: "https://feedback.hh.ru/public/attachments/762eda526855163d6940cde3475fe7ba.png",
            technologies: ["React", ".Net 6", "PostgreSQL", "Ef Core"]
        },
        {
            id: 4,
            title: "Чат-система на собственной инфраструктуре",
            description: "Учебный проект для развития навыков. Написан свой Service Discovery, Очередь сообщений, вся система реализована в микросервисной архитектуре",
            partners: ["УрФУ"],
            githubUrl: "https://github.com/FnaTikJK/Microsharps",
            imageUrl: "https://lh3.googleusercontent.com/mTPQKCBdfzpas7nP6LBZTGACvAwHBTNRipLxQvZFworfhmjWSZkLZv9t93BrqCap8jL82WQW2KKySxGfrgnxO0RT1pNzirGijPuiCReG1d8uxjNb-Pk6BpCLdpBplq6lOoWNRK5UfgSYl4sqYrfkIJ56hnDi9gwI3A2TiadI25gfOVDgdYc5fvAhGw",
            technologies: [".Net 6", "PostgreSQL", "React", "WebSockets"]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const project = projects[currentIndex];

    return (
        <Box maxW="1200px" mx="auto" p={4}>
            <Heading textAlign="center" mb={8} color="white" size="xl">
                Мои проекты
            </Heading>

            <Box position="relative">
                {/* Навигационные кнопки */}
                <Flex
                    justify="space-between"
                    position="absolute"
                    top="50%"
                    left={{ base: "-10px", md: "-20px" }}
                    right={{ base: "-10px", md: "-20px" }}
                    zIndex={2}
                    transform="translateY(-50%)"
                >
                    <IconButton
                        aria-label="Предыдущий проект"
                        icon={<FaChevronLeft />}
                        onClick={prevSlide}
                        borderRadius="full"
                        bg="whiteAlpha.900"
                        color="gray.800"
                        size={{ base: "sm", md: "md" }}
                        _hover={{
                            bg: "blue.500",
                            color: "white",
                            transform: "scale(1.1)"
                        }}
                        boxShadow="lg"
                    />
                    <IconButton
                        aria-label="Следующий проект"
                        icon={<FaChevronRight />}
                        onClick={nextSlide}
                        borderRadius="full"
                        bg="whiteAlpha.900"
                        color="gray.800"
                        size={{ base: "sm", md: "md" }}
                        _hover={{
                            bg: "blue.500",
                            color: "white",
                            transform: "scale(1.1)"
                        }}
                        boxShadow="lg"
                    />
                </Flex>

                {/* Карточка проекта */}
                <Box
                    bg="whiteAlpha.100"
                    borderRadius="2xl"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    boxShadow="0 10px 30px rgba(0, 0, 0, 0.3)"
                    _hover={{
                        borderColor: "blue.500",
                        boxShadow: "0 15px 40px rgba(59, 130, 246, 0.2)"
                    }}
                    transition="all 0.3s"
                >
                    <Flex direction={{ base: "column", lg: "row" }} height={{ base: "auto", lg: "500px" }}>
                        {/* Левая часть - картинка */}
                        <Box
                            flex={{ lg: "1" }}
                            position="relative"
                            minHeight={{ base: "250px", sm: "300px", lg: "auto" }}
                            overflow="hidden"
                        >
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                fallback={
                                    <Box
                                        bg="gray.700"
                                        width="100%"
                                        height="100%"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Text color="gray.400">Загрузка изображения...</Text>
                                    </Box>
                                }
                                _hover={{
                                    transform: "scale(1.05)",
                                    transition: "transform 0.5s ease"
                                }}
                            />

                            {/* Наложение на картинку */}
                            <Box
                                position="absolute"
                                top={0}
                                left={0}
                                right={0}
                                bottom={0}
                                bg="linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))"
                                opacity={0.7}
                            />

                            {/* Технологии на картинке */}
                            <Box
                                position="absolute"
                                bottom={4}
                                left={4}
                                right={4}
                            >
                                <Flex wrap="wrap" gap={2}>
                                    {project.technologies.slice(0, 4).map((tech, index) => (
                                        <Badge
                                            key={index}
                                            bg="blackAlpha.700"
                                            color="white"
                                            borderRadius="md"
                                            px={3}
                                            py={1}
                                            fontSize="xs"
                                            fontWeight="bold"
                                            backdropFilter="blur(10px)"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <Badge
                                            bg="blackAlpha.700"
                                            color="white"
                                            borderRadius="md"
                                            px={3}
                                            py={1}
                                            fontSize="xs"
                                            fontWeight="bold"
                                        >
                                            +{project.technologies.length - 4} more
                                        </Badge>
                                    )}
                                </Flex>
                            </Box>
                        </Box>

                        {/* Правая часть - контент */}
                        <Box
                            flex={{ lg: "1" }}
                            p={{ base: 6, md: 8 }}
                            display="flex"
                            flexDirection="column"
                        >
                            {/* Заголовок */}
                            <Heading size="lg" mb={4} color="white">
                                {project.title}
                            </Heading>

                            {/* Описание */}
                            <Text
                                color="gray.300"
                                mb={6}
                                fontSize={{ base: "sm", md: "md" }}
                                lineHeight="tall"
                                flex="1"
                            >
                                {project.description}
                            </Text>

                            {/* Партнёры */}
                            <Box mb={6}>
                                <Text fontWeight="bold" color="blue.200" mb={3}>
                                    Заказчик:
                                </Text>
                                <Flex wrap="wrap" gap={2}>
                                    {project.partners.map((partner, index) => (
                                        <Badge
                                            key={index}
                                            colorScheme="blue"
                                            variant="subtle"
                                            borderRadius="md"
                                            px={3}
                                            py={1}
                                            fontSize="sm"
                                        >
                                            {partner}
                                        </Badge>
                                    ))}
                                </Flex>
                            </Box>

                            {/* Кнопки */}
                            <Flex direction={{ base: "column", sm: "row" }} gap={4} mt="auto">
                                <Link href={project.githubUrl} isExternal flex="1">
                                    <Button
                                        leftIcon={<FaGithub />}
                                        colorScheme="gray"
                                        variant="solid"
                                        size="lg"
                                        width="100%"
                                        _hover={{
                                            transform: "translateY(-2px)",
                                            boxShadow: "lg"
                                        }}
                                    >
                                        GitHub
                                    </Button>
                                </Link>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>

                {/* Индикаторы */}
                <Flex justify="center" gap={3} mt={8}>
                    {projects.map((_, index) => (
                        <Box
                            key={index}
                            w={{ base: "10px", md: "12px" }}
                            h={{ base: "10px", md: "12px" }}
                            borderRadius="full"
                            bg={index === currentIndex ? "blue.500" : "whiteAlpha.300"}
                            onClick={() => setCurrentIndex(index)}
                            cursor="pointer"
                            _hover={{
                                bg: index === currentIndex ? "blue.600" : "whiteAlpha.500",
                                transform: "scale(1.2)"
                            }}
                            transition="all 0.2s"
                        />
                    ))}
                </Flex>

                {/* Счётчик */}
                <Text
                    textAlign="center"
                    mt={4}
                    color="gray.400"
                    fontSize="sm"
                >
                    {currentIndex + 1} / {projects.length}
                </Text>
            </Box>
        </Box>
    );
};

export default SimpleCarousel;