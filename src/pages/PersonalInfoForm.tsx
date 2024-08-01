// src/pages/PersonalInfoForm.tsx
import React, {ReactNode} from 'react';
import {useForm} from 'react-hook-form';
import {Box, Button, FormControl, FormLabel, Input, Select, useToast, Container} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import {useStore} from "../store/useStore";
import InputMask from 'react-input-mask';

const PersonalInfoForm: React.FC = () => {
    const {userData, setUserData} = useStore();
    const {register, handleSubmit, formState: {errors}, setValue} = useForm({
        defaultValues: {
            phone: userData.phone,
            firstName: userData.firstName,
            lastName: userData.lastName,
            gender: userData.gender,
        }
    });
    const navigate = useNavigate();
    const toast = useToast();

    const onSubmit = (data: any) => {
        setUserData(data);
        navigate('/address');
    };

    return (
        <Container>

            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl id="phone" isInvalid={!!errors.phone}>
                        <FormLabel>Телефон</FormLabel>
                        <Input as={InputMask}
                               mask="0\999 999 999"
                               maskChar={null}
                               {...register('phone', {required: true})}
                               defaultValue={userData.phone}
                               onChange={(e) => setValue('phone', e.target.value)}
                        />
                    </FormControl>

                    <FormControl id="firstName" isInvalid={!!errors.firstName}>
                        <FormLabel>Имя</FormLabel>
                        <Input type="text" {...register('firstName', {required: true})} />
                    </FormControl>

                    <FormControl id="lastName" isInvalid={!!errors.lastName}>
                        <FormLabel>Фамилия</FormLabel>
                        <Input type="text" {...register('lastName', {required: true})} />
                    </FormControl>

                    <FormControl id="gender" isInvalid={!!errors.gender}>
                        <FormLabel>Пол</FormLabel>
                        <Select {...register('gender', {required: true})}>
                            <option value="Мужской">Мужской</option>
                            <option value="Женский">Женский</option>
                        </Select>
                    </FormControl>

                    <Button mt={4} colorScheme="teal" type="submit">Далее</Button>
                </form>
            </Box>
        </Container>
    );
};

export default PersonalInfoForm;
