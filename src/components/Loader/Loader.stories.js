import { Loader } from "./Loader";

export default {
    title: 'Edustipend/Components/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        variant: { control: 'select', options: ['primary', 'secondary', 'neutral'] }
    }
};

export const Loading = {
    args: {
        size: 'medium',
        variant: 'primary'
    }
};