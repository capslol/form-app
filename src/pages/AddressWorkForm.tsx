import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, Box, Button, FormControl, FormLabel, Input, Select, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {useStore} from "../store/useStore";

const AddressWorkForm: React.FC = () => {
    const { userData, setUserData } = useStore();
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            workplace: userData.workplace,
            address: userData.address,
        }
    });
    const navigate = useNavigate();
    const toast = useToast();
    const [workplaces, setWorkplaces] = useState<string[]>([]);

    useEffect(() => {
        // Fetching workplace categories
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => setWorkplaces(data))
            .catch(() => {
                toast({
                    title: "Ошибка загрузки данных.",
                    description: "Не удалось загрузить список мест работы.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            });
    }, [toast]);

    const onSubmit = (data: any) => {
        console.log(data)
        setUserData(data);
        navigate('/loan');
    };

    return (
        <Container>

        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl id="workplace" isInvalid={!!errors.workplace}>
                    <FormLabel>Место работы</FormLabel>
                    <Controller
                        name="workplace"
                        control={control}
                        render={({ field }) => (
                            <Select {...field} placeholder="Выберите место работы">
                                {workplaces.map((workplace) => (
                                    <option key={workplace} value={workplace}>{workplace}</option>
                                ))}
                            </Select>
                        )}
                        rules={{ required: 'Место работы обязательно' }}
                    />
                </FormControl>

                <FormControl id="address" isInvalid={!!errors.address}>
                    <FormLabel>Адрес проживания</FormLabel>
                    <Input type="text" {...register('address', { required: true })} />
                </FormControl>

                <Button mt={4} mr={4} onClick={() => navigate('/')} colorScheme="gray">Назад</Button>
                <Button mt={4} colorScheme="teal" type="submit">Далее</Button>
            </form>
        </Box>
        </Container>

    );
};

export default AddressWorkForm;
