import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {Container, Box, Button, FormControl, FormLabel, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useStore } from "../store/useStore";

const LoanParamsForm: React.FC = () => {
    const { userData, setUserData } = useStore();
    const { register, handleSubmit, setValue, watch } = useForm({
        defaultValues: {
            loanAmount: userData.loanAmount,
            loanDuration: userData.loanDuration,
        }
    });

    const [loanAmount, setLoanAmount] = useState(userData.loanAmount);
    const [loanDuration, setLoanDuration] = useState(userData.loanDuration);

    const navigate = useNavigate();
    const toast = useToast();

    const onSubmit = async (data: any) => {
        setUserData(data);
        try {
            const response = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: `${userData.firstName} ${userData.lastName}` }),
            });
            const result = await response.json();
            toast({
                title: "Заявка отправлена.",
                description: `Поздравляем, ${userData.lastName} ${userData.firstName}. Вам одобрена ${data.loanAmount} на ${data.loanDuration} дней.`,
                status: "success",
                duration: 9000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: "Ошибка.",
                description: "Не удалось отправить заявку. Пожалуйста, попробуйте снова.",
                status: "error",
                duration: 9000,
                isClosable: true,
            });
        }
    };

    return (
        <Container>

        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl id="loanAmount">
                    <FormLabel>Сумма займа</FormLabel>
                    <Slider
                        {...register('loanAmount')}
                        defaultValue={userData.loanAmount}
                        min={200}
                        max={1000}
                        step={100}
                        onChange={(val) => {
                            setValue('loanAmount', val)
                            setLoanAmount(val);
                        }}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                    <Text mt={2}>Выбранная сумма: ${loanAmount}</Text>
                </FormControl>

                <FormControl id="loanDuration">
                    <FormLabel mt={22}>Срок займа</FormLabel>
                    <Slider
                        {...register('loanDuration')}
                        defaultValue={userData.loanDuration}
                        min={10}
                        max={30}
                        step={1}
                        onChange={(val) => {
                            setValue('loanDuration', val);
                            setLoanDuration(val);
                        }}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                    <Text mt={2}>Выбранный срок: {loanDuration} дней</Text>
                </FormControl>

                <Button mt={4} mr={4} onClick={() => navigate('/address')} colorScheme="gray">Назад</Button>
                <Button mt={4} colorScheme="teal" type="submit">Подать заявку</Button>
            </form>
        </Box>
        </Container>

    );
};

export default LoanParamsForm;
