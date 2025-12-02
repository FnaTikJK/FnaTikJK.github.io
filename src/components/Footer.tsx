import React from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Link,
    VStack,
    HStack,
    Container,
    Divider,
    Tooltip
} from '@chakra-ui/react';
import { FaTelegram, FaGithub, FaEnvelope, FaHeart, FaLinkedin } from 'react-icons/fa';
import { SiGmail, SiTelegram } from 'react-icons/si';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'Telegram',
            icon: SiTelegram,
            url: 'https://t.me/fnatikjk',
            label: 'Написать в Telegram',
            gradient: 'linear-gradient(135deg, #0088cc, #26A6E9)'
        },
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/fnatikjk',
            label: 'Аккаунт GitHub',
            gradient: 'linear-gradient(135deg, #333333, #6e5494)'
        },
        {
            name: 'Email',
            icon: SiGmail,
            url: 'mailto:yaskovanton333@gmail.com',
            label: 'Написать на почту',
            gradient: 'linear-gradient(135deg, #D14836, #EA4335)'
        }
    ];

    return (
        <Box as="footer" bg="gray.900" color="white" pt={12} pb={8} mt="auto">
            <Container maxW="1200px">
                <VStack spacing={10} align="center">

                    {/* Основной блок с иконками */}
                    <Box textAlign="center">
                        <Text fontSize="xl" mb={6} fontWeight="bold" color="white">
                            Мои контакты:
                        </Text>

                        <HStack spacing={{ base: 4, md: 6 }} justify="center" wrap="wrap">
                            {socialLinks.map((social) => (
                                <Tooltip key={social.name} label={social.label} placement="top" hasArrow>
                                    <Link href={social.url} isExternal>
                                        <Box
                                            position="relative"
                                            _hover={{
                                                transform: 'translateY(-8px)'
                                            }}
                                            transition="transform 0.3s ease"
                                        >
                                            <Flex
                                                w="70px"
                                                h="70px"
                                                align="center"
                                                justify="center"
                                                borderRadius="20px"
                                                bg={social.gradient}
                                                color="white"
                                                fontSize="28px"
                                                cursor="pointer"
                                                boxShadow="0 4px 15px rgba(0,0,0,0.2)"
                                                _hover={{
                                                    boxShadow: `0 8px 25px ${social.gradient}80`
                                                }}
                                                transition="all 0.3s ease"
                                            >
                                                <social.icon />
                                            </Flex>

                                            {/* Подпись под иконкой */}
                                            <Text
                                                mt={3}
                                                fontSize="xs"
                                                color="gray.400"
                                                textAlign="center"
                                                opacity={0}
                                                _groupHover={{ opacity: 1 }}
                                                transition="opacity 0.3s"
                                            >
                                                {social.name}
                                            </Text>
                                        </Box>
                                    </Link>
                                </Tooltip>
                            ))}
                        </HStack>
                    </Box>

                    <Divider borderColor="whiteAlpha.200" maxW="400px" />

                    {/* Контактная информация */}
                    <VStack spacing={4} textAlign="center">
                        <Box>
                            <Text fontSize="lg" fontWeight="semibold" color="white">
                                Антон Яськов
                            </Text>
                            <Text fontSize="sm" color="gray.400" mt={1}>
                                Fullstack Developer • DevOps Engineer • Студент магистратуры УрФУ
                            </Text>
                        </Box>

                        <Flex align="center" gap={2} color="gray.500" fontSize="sm">
                            <FaEnvelope />
                            <Text>yaskovanton333@gmail.com</Text>
                        </Flex>
                    </VStack>

                    <Divider borderColor="whiteAlpha.200" maxW="400px" />

                </VStack>
            </Container>
        </Box>
    );
};

export default Footer;