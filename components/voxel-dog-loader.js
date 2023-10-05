'use client';
import { forwardRef } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const DogSpinner = () => (
    <Spinner
        size="xl"
        className="spiner"
        position="absolute"
        left="25%"
        top="25%"
        // ml="calc(0px - var(--spinner-size) / 2)"
        // mt="calc(0px - var(--spinner-size))"
    />
);

// eslint-disable-next-line react/display-name
export const DogContainer = forwardRef(({ children }, ref) => (
    <Box ref={ref} className="voxel-dog" m="auto" position="relative">
        {children}
    </Box>
));

const Loader = () => {
    return (
        <DogContainer>
            <DogSpinner />
        </DogContainer>
    );
};

export default Loader;
