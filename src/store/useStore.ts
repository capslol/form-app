import {create} from 'zustand';

interface UserData {
    phone: string;
    firstName: string;
    lastName: string;
    gender: string;
    workplace: string;
    address: string;
    loanAmount: number;
    loanDuration: number;
}

interface Store {
    userData: UserData;
    setUserData: (data: Partial<UserData>) => void;
}

export const useStore = create<Store>((set) => ({
    userData: {
        phone: '',
        firstName: '',
        lastName: '',
        gender: '',
        workplace: '',
        address: '',
        loanAmount: 200,
        loanDuration: 10,
    },
    setUserData: (data) => set( state => ({ userData: { ...state.userData, ...data } })),
    loading: false,
    error: null
}));
