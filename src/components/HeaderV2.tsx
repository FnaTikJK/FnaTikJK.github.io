'use client'
import { Box, Flex, Button, Spacer, Container, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const Header2 = () => {
    // Хук для адаптации цвета фона к теме (светлая/темная)
    const headerBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');

    return (
        // 1. Box: Основной контейнер, который занимает всю ширину (w="full")
        //    и устанавливает фиксированную высоту и границу снизу.
        <Box
            as="header"
            w="full"
            bg={"gray.800"}
            borderBottom="1px"
            borderColor={borderColor}
            boxShadow="sm" // Небольшая тень для визуального отделения
        >
            {/* 2. Container: Ограничивает ширину контента по центру (например, maxW="6xl" - 1152px),
           чтобы содержимое не растягивалось на очень больших экранах.
           Если вам нужно, чтобы контент был по всей ширине, замените Container на Box.
      */}
            <Container maxW="6xl" px={{ base: 4, md: 8 }}>
                {/* 3. Flex: Используется для размещения элементов в одну строку.
             - align="center": Выравнивает элементы по центру по вертикали.
             - py: padding-top и padding-bottom для высоты хедера.
        */}
                <Flex
                    align="center"
                    py={7} // Увеличивает высоту хедера
                    minH="16" // Минимальная высота (h-16 в Tailwind)
                >
                    {/* Элемент-заполнитель для "Логотипа" или Навигации
            - FlexGrow 0: Элемент не будет расширяться.
          */}
                    <Box fontSize="xl" fontWeight="bold" color={"white"}>
                        Yaskov Anton
                    </Box>

                    {/* 4. Spacer: Ключевой элемент. Он занимает все доступное
               пространство между "Логотипом" и кнопками, тем самым
               прижимая кнопки к правому краю.
          */}
                    <Spacer />

                    {/* 5. Правая группа кнопок
          */}
                    <Flex gap={3}> {/* gap={3} добавляет отступ между кнопками */}
                        <Button colorScheme="whiteAlpha" variant="ghost">
                            Скиллы
                        </Button>
                        <Button colorScheme="whiteAlpha" variant="ghost">
                            Проекты
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header2;