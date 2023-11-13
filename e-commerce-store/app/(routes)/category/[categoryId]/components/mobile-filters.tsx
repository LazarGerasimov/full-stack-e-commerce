"use client";

import { useState } from 'react';

import { Color, Size } from "@/types";
import Button from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {

    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <Button className='flex items-center gap-x-2 lg:hidden'>
                Filters
                <Plus size={20} />
            </Button>
        </>
    )
}

export default MobileFilters